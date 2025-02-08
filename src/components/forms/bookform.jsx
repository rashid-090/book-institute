import React, { useState } from "react";

const BookForm = () => {
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
    cardNumber: "",
    expiryDate: "",
    cvv: "",
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
              Step 2: Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mobile Number */}
              <div>
                <label className="block text-white">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-white">WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter your WhatsApp number"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
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
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Step 3: Payment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card Number */}
              <div className="md:col-span-2">
                <label className="block text-white">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="Enter your card number"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* Expiry Date */}
              <div>
                <label className="block text-white">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-mainclr"
                />
              </div>

              {/* CVV */}
              <div>
                <label className="block text-white">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
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
              Step 4: Confirmation
            </h2>
            <div className="text-white text-center">
              <p>Thank you for submitting your details!</p>
              <p>We will contact you shortly.</p>
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
        {["Basic Details", "Contact Details", "Verification", "Completed"].map((label, index) => (
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
          style={{ width: `${((step - 1) / 3) * 100}%` }}
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
        {step < 4 ? (
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

export default BookForm;