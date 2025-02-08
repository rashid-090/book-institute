import React, { useState } from "react";

const CourseRegistrationForm = () => {
  const [step, setStep] = useState(1); // Track current step
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
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const validateSerialNumber = async () => {
    // Simulate backend validation
    const validSerialNumbers = ["12345", "67890"]; // Example valid serial numbers
    if (validSerialNumbers.includes(formData.bookSerialNumber)) {
      nextStep();
    } else {
      setErrorMessage("Invalid serial number. Please check and try again.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 1: Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-white">What’s your full name?</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Age & Gender */}
              <div>
                <label className="block text-white">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
              <div>
                <label className="block text-white">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-gray-400 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-white">Can you share your address?</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              <div>
                <label className="block text-white">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
              <div>
                <label className="block text-white">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
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
              Step 2: Educational Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Education Level */}
              <div className="md:col-span-2">
                <label className="block text-white">What’s your highest level of education?</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["School", "Graduate", "PG", "MPhil", "PhD", "Other"].map((level) => (
                    <label key={level} className="flex items-center text-white">
                      <input
                        type="checkbox"
                        name="educationLevel"
                        value={level}
                        checked={formData.educationLevel === level}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              {/* Specify Education */}
              <div className="md:col-span-2">
                <label className="block text-white">Can you specify?</label>
                <input
                  type="text"
                  name="educationSpecify"
                  value={formData.educationSpecify}
                  onChange={handleChange}
                  placeholder="Specify your education"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 3: Professional Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Professional Background */}
              <div className="md:col-span-2">
                <label className="block text-white">What’s your current professional background?</label>
                <select
                  name="professionalBackground"
                  value={formData.professionalBackground}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-gray-400 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                >
                  <option value="">Select Background</option>
                  {["Business", "Retired", "Teaching", "Health", "Engineering", "Other"].map((bg) => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>

              {/* Specify Professional Background */}
              <div className="md:col-span-2">
                <label className="block text-white">Can you specify?</label>
                <input
                  type="text"
                  name="professionalSpecify"
                  value={formData.professionalSpecify}
                  onChange={handleChange}
                  placeholder="Specify your professional background"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 4: Book Requirement Check
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Has Read Book */}
              <div className="md:col-span-2">
                <label className="block text-white">Have you read the book?</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="hasReadBook"
                      value="Yes"
                      checked={formData.hasReadBook === "Yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="radio"
                      name="hasReadBook"
                      value="No"
                      checked={formData.hasReadBook === "No"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Serial Number (Conditional) */}
              {formData.hasReadBook === "Yes" && (
                <div className="md:col-span-2">
                  <label className="block text-white">Enter Book Serial Number</label>
                  <input
                    type="text"
                    name="bookSerialNumber"
                    value={formData.bookSerialNumber}
                    onChange={handleChange}
                    placeholder="Enter your book serial number, ex:12345"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                  )}
                </div>
              )}
            </div>

            {/* Buy the Book Button (Conditional) */}
            {(formData.hasReadBook === "No" || errorMessage) && (
              <div className="mt-4">
                <button
                  onClick={() => alert("Redirect to Buy the Book page")}
                  className="bg-mainclr text-white p-2 rounded-md hover:bg-mainhvr transition"
                >
                  Buy the Book
                </button>
              </div>
            )}
          </>
        );

      case 5:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 5: Confirmation
            </h2>
            <div className="text-white text-center">
              <p>Thank you, {formData.fullName}.</p>
              <p>We’re processing your registration and will share the fee and schedule details shortly.</p>
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
        {["Personal Details", "Education", "Professional", "Book Check", "Confirmation"].map((label, index) => (
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
          style={{ width: `${((step - 1) / 4) * 100}%` }}
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
        {step < 5 ? (
          <button
            onClick={step === 4 ? validateSerialNumber : nextStep}
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

export default CourseRegistrationForm;