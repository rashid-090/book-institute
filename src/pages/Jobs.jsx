
import React, { useState } from "react";

const JobsAndOfferForm = () => {
  const [step, setStep] = useState(1); // Track current step
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] }); // Handle file uploads
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

              {/* Education */}
              <div>
                <label className="block text-white">Educational Details</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="Enter your educational qualifications"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Profession */}
              <div>
                <label className="block text-white">Professional Details</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Enter your profession"
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
              Step 2: Registration Type
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Registration Type */}
              <div>
                <label className="block text-white">Registration Type</label>
                <select
                  name="registrationType"
                  value={formData.registrationType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-gray-400 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                >
                  <option value="">Select Registration Type</option>
                  <option value="Job Application">Job Application</option>
                  <option value="Business Collaboration">Business Collaboration</option>
                  <option value="Service Offer">Service Offer</option>
                </select>
              </div>

              {/* Conditional Fields */}
              {formData.registrationType === "Job Application" && (
                <>
                  <div>
                    <label className="block text-white">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    />
                  </div>
                  <div>
                    <label className="block text-white">Upload Cover Letter</label>
                    <input
                      type="file"
                      name="coverLetter"
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    />
                  </div>
                </>
              )}

              {formData.registrationType === "Business Collaboration" && (
                <div>
                  <label className="block text-white">Describe Your Proposal</label>
                  <textarea
                    name="proposal"
                    value={formData.proposal}
                    onChange={handleChange}
                    placeholder="Describe your business collaboration proposal..."
                    className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    rows="5"
                  />
                </div>
              )}

              {formData.registrationType === "Service Offer" && (
                <div>
                  <label className="block text-white">Detail Your Services</label>
                  <textarea
                    name="serviceDetails"
                    value={formData.serviceDetails}
                    onChange={handleChange}
                    placeholder="Detail the services you are offering..."
                    className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                    rows="5"
                  />
                </div>
              )}
            </div>
          </>
        );

      case 3:
        return (
          <section>
          
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 3: Confirmation
            </h2>
            <div className="text-white text-center">
              <p>
                Thank you, <span className="font-bold">{formData.fullName}</span>.
                Your submission has been received, and we’ll contact you shortly.
              </p>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto py-20">
          <h1 className="text-5xl font-normal capitalize text-center pb-10">Jobs and Offers</h1>
            {/* form */}
    <div className="w-[100%] md:w-[60%] mx-auto bg-white/20 text-black backdrop-blur-md rounded-lg p-6 shadow-lg">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-6 relative">
        {["Basic Details", "Registration Type", "Confirmation"].map((label, index) => (
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
    </div>
    </section>
  );
};

export default JobsAndOfferForm;