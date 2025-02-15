import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CourseRegistrationForm = ({ isModalOpen, setIsModalOpen }) => {
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
    educationLevel: "",
    educationSpecify: "",
    professionalBackground: "",
    professionalSpecify: "",
    hasReadBook: "",
    bookSerialNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error message when user types
  };

  const nextStep = () => {
    if (validateCurrentField()) {
      setDirection(1); // Set direction to "next"
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1); // Set direction to "prev"
    setStep(step - 1);
  };

  const closeModal = () => setIsModalOpen(false);

  const validateSerialNumber = async () => {
    // Simulate backend validation
    const validSerialNumbers = ["12345", "67890"]; // Example valid serial numbers
    if (validSerialNumbers.includes(formData.bookSerialNumber)) {
      nextStep();
    } else {
      setErrorMessage("Invalid serial number. Please check and try again.");
    }
  };

  const validateCurrentField = () => {
    const field = fields[step];
    const value = formData[field.name];

    // Required field validation
    if (!value) {
      setErrorMessage("This field is required.");
      return false;
    }

    // Specific field validations
    switch (field.name) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrorMessage("Please enter a valid email address.");
          return false;
        }
        break;
      case "mobile":
      case "whatsapp":
        if (!/^\d{10}$/.test(value)) {
          setErrorMessage("Please enter a valid 10-digit phone number.");
          return false;
        }
        break;
      case "dob":
        const dobDate = new Date(value);
        const today = new Date();
        if (dobDate >= today) {
          setErrorMessage("Please enter a valid date of birth.");
          return false;
        }
        break;
      default:
        break;
    }

    setErrorMessage(""); // Clear error message if validation passes
    return true;
  };

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
    {
      label: "What’s your highest level of education?",
      name: "educationLevel",
      type: "select",
      options: ["School", "Graduate", "PG", "MPhil", "PhD", "Other"],
      placeholder: "Select Education Level",
    },
    {
      label: "Can you specify your education?",
      name: "educationSpecify",
      type: "text",
      placeholder: "Specify your education",
    },
    {
      label: "What’s your current professional background?",
      name: "professionalBackground",
      type: "select",
      options: ["Business", "Retired", "Teaching", "Health", "Engineering", "Other"],
      placeholder: "Select Professional Background",
    },
    {
      label: "Can you specify your professional background?",
      name: "professionalSpecify",
      type: "text",
      placeholder: "Specify your professional background",
    },
    {
      label: "Have you read the book?",
      name: "hasReadBook",
      type: "select",
      options: ["Yes", "No"],
      placeholder: "Select an option",
    },
    {
      label: "Enter Book Serial Number",
      name: "bookSerialNumber",
      type: "text",
      placeholder: "Enter your book serial number, ex:12345",
      condition: formData.hasReadBook === "Yes",
    },
  ];

  const field = fields[step];

  // Skip the bookSerialNumber field if hasReadBook is "No"
  const shouldSkipBookSerialNumber = formData.hasReadBook === "No" && field.name === "bookSerialNumber";

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
                  {(errorMessage && field.name !== "bookSerialNumber") && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
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
                  formData.hasReadBook === "No" && field.name === "hasReadBook" ? (
                    <button
                      onClick={() => alert("Redirect to Buy the Book page")}
                      className="bg-mainclr text-white py-1 rounded-full px-5 hover:bg-mainhvr transition"
                    >
                      Buy the Book
                    </button>
                  ) : (
                    <button
                      onClick={field.name === "bookSerialNumber" ? validateSerialNumber : nextStep}
                      className="bg-mainclr text-white py-1 rounded-full px-5 hover:bg-mainhvr transition"
                    >
                      Next
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => {
                      alert("Form Submitted!");
                      closeModal();
                    }}
                    className="bg-green-500 text-white py-1 rounded-full px-5 hover:bg-green-600 transition"
                  >
                    Submit
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

export default CourseRegistrationForm;