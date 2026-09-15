import { useState } from "react";

const TermsAndConditions = () => {
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] =
    useState(false);
  const [isTermsAndConditionsOpen, setIsTermsAndConditionsOpen] =
    useState(false);

  const handleToggleTermsAndConditionsAccepted = () => {
    setTermsAndConditionsAccepted((prev) => !prev);
  };

  const handleToggleIsTermsAndConditionsOpen = () => {
    setIsTermsAndConditionsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex gap-1 items-center">
        <label className="flex items-start space-x-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={termsAndConditionsAccepted}
            onChange={handleToggleTermsAndConditionsAccepted}
            className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            {"I've read and accepted "}{" "}
          </span>
        </label>
        <button
          onClick={handleToggleIsTermsAndConditionsOpen}
          className="text-gray-900 underline hover:text-blue-600 transition-colors cursor-pointer"
        >
          Terms & Conditions
        </button>
      </div>

      {isTermsAndConditionsOpen && (
        <p className="my-2">
          I confirm that all the information I entered in sections Customer
          Details and Payment Details is not real data. Even if that data turns
          out to be real on purpose or by coincidence, I fully understand that
          the code owner will NOT be responsible for storing or processing of
          that data!
        </p>
      )}

      <button
        type="button"
        disabled={!termsAndConditionsAccepted}
        className="w-full bg-[#1a66ff] hover:bg-blue-700 cursor-pointer text-white mt-8 font-medium py-3 px-4 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-30 disabled:cursor-auto"
      >
        Place Order
      </button>
    </div>
  );
};

export default TermsAndConditions;
