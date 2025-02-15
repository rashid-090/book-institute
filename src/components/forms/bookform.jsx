import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookForm = ({ isModalOpen, setIsModalOpen }) => {
  const [step, setStep] = useState(0); // Track current step
  const [direction, setDirection] = useState(1); // Track animation direction (1 for next, -1 for prev)
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    address: "",
    district: "",
    state: "",
    country: "",
    mobile: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        break;
      case "dob":
        if (!value) return "Date of birth is required";
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
        if (!/^\d{10}$/.test(value)) return "Invalid mobile number";
        break;
      case "whatsapp":
        if (!value.trim()) return "WhatsApp number is required";
        if (!/^\d{10}$/.test(value)) return "Invalid WhatsApp number";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email";
        break;
      default:
        break;
    }
    return "";
  };

  const validateStep = () => {
    const field = fields[step];
    const error = validateField(field.name, formData[field.name]);
    if (error) {
      setErrors({ ...errors, [field.name]: error });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return; // Do not proceed if validation fails
    setDirection(1); // Set direction to "next"
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection(-1); // Set direction to "prev"
    setStep(step - 1);
  };

  const closeModal = () => setIsModalOpen(false);

  const fields = [
    {
      label: "What’s your full name?",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Date of Birth",
      name: "dob",
      type: "date",
      placeholder: "Enter your date of birth",
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
      placeholder: "Select Gender",
    },
    {
      label: "Can you share your address?",
      name: "address",
      type: "text",
      placeholder: "Street Address",
    },
    {
      label: "District",
      name: "district",
      type: "text",
      placeholder: "District",
    },
    {
      label: "State",
      name: "state",
      type: "text",
      placeholder: "State",
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Country",
    },
    {
      label: "Mobile Number",
      name: "mobile",
      type: "text",
      placeholder: "Enter your mobile number",
    },
    {
      label: "WhatsApp Number",
      name: "whatsapp",
      type: "text",
      placeholder: "Enter your WhatsApp number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
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
                        alert("Form Submitted!");
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