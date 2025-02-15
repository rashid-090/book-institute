import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobsAndOfferForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage popup visibility
  const [step, setStep] = useState(0); // Track current step
  const [direction, setDirection] = useState(1); // Track animation direction (1 for next, -1 for prev)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    profession: "",
    registrationType: "", // Job Application, Business Collaboration, Service Offer
    resume: null, // For Job Application
    coverLetter: null, // For Job Application
    proposal: "", // For Business Collaboration
    serviceDetails: "", // For Service Offer
  });
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] }); // Handle file uploads
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear the error for the field when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\d{10}$/.test(value)) return "Invalid phone number";
        break;
      case "education":
        if (!value.trim()) return "Educational details are required";
        break;
      case "profession":
        if (!value.trim()) return "Professional details are required";
        break;
      case "registrationType":
        if (!value.trim()) return "Registration type is required";
        break;
      case "proposal":
        if (!value.trim()) return "Proposal is required";
        break;
      case "serviceDetails":
        if (!value.trim()) return "Service details are required";
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
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Educational Details",
      name: "education",
      type: "text",
      placeholder: "Enter your educational qualifications",
    },
    {
      label: "Professional Details",
      name: "profession",
      type: "text",
      placeholder: "Enter your profession",
    },
    {
      label: "Registration Type",
      name: "registrationType",
      type: "select",
      options: ["Job Application", "Business Collaboration", "Service Offer"],
      placeholder: "Select Registration Type",
    },
    {
      label: "Upload Resume",
      name: "resume",
      type: "file",
      placeholder: "Upload your resume",
    },
    {
      label: "Upload Cover Letter",
      name: "coverLetter",
      type: "file",
      placeholder: "Upload your cover letter",
    },
    {
      label: "Describe Your Proposal",
      name: "proposal",
      type: "textarea",
      placeholder: "Describe your business collaboration proposal...",
    },
    {
      label: "Detail Your Services",
      name: "serviceDetails",
      type: "textarea",
      placeholder: "Detail the services you are offering...",
    },
  ];

  const field = fields[step];

  return (
    <>
      {/* Apply Job Button */}
      <div className="flex flex-col items-center">
      <h1 className="text-5xl font-normal capitalize text-center pb-10">Jobs and Offers</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-mainclr px-10 w-fit h-12 rounded-full capitalize hover:bg-mainhvr transition"
      >
        Apply Job
      </button>
      </div>

      {/* Form Popup */}
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
                  ) : field.type === "file" ? (
                    <input
                      type="file"
                      name={field.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 text-black rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    />
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-2 border border-gray-300 text-black rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                      rows="5"
                    />
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

export default JobsAndOfferForm;