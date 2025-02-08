import React, { useState } from "react";

const ContactForm = () => {
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 1: Basic Details
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-white">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 2: Your Message
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Message Field */}
              <div>
                <label className="block text-white">How can we assist you?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                  rows="5"
                />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 3: Confirmation
            </h2>
            <div className="text-white text-center">
              <p>
                Thank you, <span className="font-bold">{formData.fullName}</span>.
                We’ve received your message and will get back to you soon.
              </p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-[100%] md:w-[60%] mx-auto bg-white/20 text-black backdrop-blur-md rounded-lg p-6 shadow-lg">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-6 relative">
        {["Basic Details", "Your Message", "Confirmation"].map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                step >= index + 1 ? "bg-mainclr" : "bg-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-white text-sm mt-2 transition-all duration-300">
              {label}
            </span>
          </div>
        ))}
        {/* Connector Lines */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-500 z-[-1]"></div>
        <div
          className="absolute top-4 left-0 h-0.5 bg-mainclr z-[-1] transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
      </div>

      {/* Render Current Step */}
      <div className="transition-all duration-300 transform">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={nextStep}
            className="bg-mainclr text-white p-2 rounded-md hover:bg-mainhvr transition"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => alert("Form Submitted!")}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        )}
      </div>
    </section>
  );
};

export default ContactForm;