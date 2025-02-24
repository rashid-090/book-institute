import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { URL } from "../../../Common/api";
import { config } from "../../../Common/configurations";
import axios from "axios";
import { toast } from "react-toastify";

const BookForm = ({ isModalOpen, setIsModalOpen }) => {
  const [step, setStep] = useState(0); // Track current step
  const [direction, setDirection] = useState(1); // Track animation direction (1 for next, -1 for prev)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    whatsapp: "",
    email: "",
    delivery: {
      address: "",
      locality: "",
      pincode: "",
      district: "",
      state: "",
      country: "",
    },
    totalPrice: 5000
  });

  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["address", "locality", "pincode", "district", "state", "country"].includes(name)) {
      // Update nested delivery fields
      setFormData((prevData) => ({
        ...prevData,
        delivery: {
          ...prevData.delivery,
          [name]: value,
        },
      }));
    } else {
      // Update top-level fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear the error for the field when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };


  const validateField = (name, value) => {
    console.log("Name :", name, "   Value:", value);
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        break;
      case "age":
        if (!value) return "Age is required";
        if (!/^\d+$/.test(value)) return "Age must be a valid number";
        break;
      case "pincode":
        if (!value) return "pincode is required";
        if (!/^\d{5,7}$/.test(value)) return "Pincode must be valid";
        break;
      case "gender":
        if (!value) return "Gender is required";
        break;
      case "address":
        if (!value.trim()) return "Address is required";
        break;
      case "district":
        if (!value.trim()) return "District is required";
        break;
      case "state":
        if (!value.trim()) return "State is required";
        break;
      case "country":
        if (!value.trim()) return "Country is required";
        break;
      case "mobile":
        if (!value.trim()) return "Mobile number is required";
        if (!/^\d{10,12}$/.test(value)) return "Mobile number must be 10 to 12 digits";
        break;
      case "whatsapp":
        if (!value.trim()) return "WhatsApp number is required";
        if (!/^\d{10,12}$/.test(value)) return "WhatsApp number must be 10 to 12 digits";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        break;
      default:
        break;
    }
    return "";
  };


  const validateStep = () => {
    const field = fields[step];
    const value = field.name in formData.delivery ? formData.delivery[field.name] : formData[field.name];
    const error = validateField(field.name, value);
    if (error) {
      setErrors({ ...errors, [field.name]: error });
      return false;
    }
    return true;
  };




  const nextStep = () => {
    if (!validateStep()) return;
    setDirection(1);
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(step - 1);
  };


  // Saving the order to db
  const saveOrder = async (response) => {
    // setOrderPlacedLoading(true);

    try {
      // Make the first POST request to create the order
      const orderResponse = await axios.post(
        `${URL}/user/book-purchase`,
        formData,
        config
      );



      const { data } = orderResponse.data;

      // Make the second POST request to verify payment with Razorpay and save that to database
      await axios.post(
        `${URL}/user/razor-verify`,
        { ...response, order: data._id },
        config
      );

      // Updating user side
      // setOrderData(true);
      toast.success("Book purchased");
      // setOrderPlacedLoading(false);
      // setConfirmationPage(true);
      // navigateToOrderConfirmation(order);
      // dispatch(clearCartOnOrderPlaced());

    } catch (error) {
      // Error Handling
      console.log(error);
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      // setOrderPlacedLoading(false);
    }
  };

  // Initiating razor pay payment method or window
  const initiateRazorPayPayment = async () => {
    // Getting razor-pay secret key
    const {
      data: { key },
    } = await axios.get(`${URL}/user/razor-key`, config);

    // Convert total to paisa (multiply by 100)
    const amountInPaisa = Math.round(5000 * 100);

    // making razor-pay order
    const {
      data: { order },
    } = await axios.post(
      `${URL}/user/razor-order`,
      { amount: amountInPaisa }, // Send amount in paisa
      config
    );


    // setting razor pay configurations
    let options = {
      key: key,
      amount: amountInPaisa, // Use the same amount in paisa
      currency: "INR",
      name: "Bharath Research Institute of Quantum Science and Time Intelligence",
      description: "Test Transaction",
      // image: { logo },
      order_id: order.id,
      handler: function (response) {
        saveOrder(response);
        console.log(response)
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razor pay Corporate Office",
      },
      theme: {
        color: "#880640",
      },
    };

    // enabling razor-pay payment screen
    const razor = new window.Razorpay(options);

    razor.open();

    // If failed toast it.
    razor.on("payment.failed", function (response) {
      toast.error(response.error.code);
      toast.error(response.error.description);
      toast.error(response.error.source);
      toast.error(response.error.step);
      toast.error(response.error.reason);
      toast.error(response.error.metadata.order_id);
      toast.error(response.error.metadata.payment_id);
      // setOrderPlacedLoading(false);
    });
  };

  const placeOrder = async () => {
    initiateRazorPayPayment();

  };



  const closeModal = () => setIsModalOpen(false);

  const fields = [
    { label: "What’s your full name?", name: "name", type: "text", placeholder: "Enter your full name" },
    { label: "May I know your age?", name: "age", type: "number", placeholder: "" },
    { label: "May I know your gender", name: "gender", type: "select", options: ["Male", "Female", "Other"], placeholder: "Select Gender" },
    { label: "Can you share your address?", name: "address", type: "text", placeholder: "Street Address" },
    { label: "Can you share your phone pincode?", name: "pincode", type: "number", placeholder: "" },
    { label: "Can you share your locality?", name: "locality", type: "text", placeholder: "Locality" },
    { label: "Can you share your district?", name: "district", type: "text", placeholder: "District" },
    { label: "State", name: "state", type: "text", placeholder: "State" },
    { label: "Country", name: "country", type: "text", placeholder: "Country" },
    { label: "Mobile Number", name: "mobile", type: "text", placeholder: "Enter your mobile number" },
    { label: "WhatsApp Number", name: "whatsapp", type: "text", placeholder: "Enter your WhatsApp number" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
  ];


  const field = fields[step];

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }} // Elastic effect for modal
              className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg w-[90%] md:w-[40%] relative py-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl"
              >
                &times;
              </button>

              {/* Render Current Field with AnimatePresence */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ x: direction > 0 ? "100%" : "-100%" }} // Slide in from right or left
                  animate={{ x: 0 }} // Center position
                  exit={{ x: direction > 0 ? "-110%" : "110%" }} // Slide out to left or right
                  transition={{ type: "spring", stiffness: 150, damping: 20 }} // Elastic effect for fields
                  className="w-full"
                >
                  <h2 className="text-xl font-semibold text-white mb-3 text-center">
                    {field.label}
                  </h2>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 text-black rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-2 border border-gray-300 text-black rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-2">{errors[field.name]}</p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                {step > 0 && (
                  <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-1 rounded-full px-5 hover:bg-gray-600 transition"
                  >
                    Previous
                  </button>
                )}
                {step < fields.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="bg-mainclr text-white py-1 rounded-full px-5 hover:bg-mainhvr transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (validateStep()) {
                        placeOrder()
                        console.log(formData)
                        closeModal();
                      }
                    }}
                    className="bg-green-500 text-white py-1 rounded-full px-5 hover:bg-green-600 transition"
                  >
                    Pay Now
                  </button>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookForm;