import React, { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("single");

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            {/* Close Button */}
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>

            {/* Title */}
            <h2 className="modal-title">Unlock Your Test Access</h2>

            <div className="modal-content">
              {/* Left - Input Fields */}
              <div className="form-section">
                <h1>Fill your details</h1>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input-box"
                />
                <input
                  type="text"
                  placeholder="Enter Your Mobile no"
                  className="input-box"
                />
              </div>

              {/* Right - Plan Section */}
              <div className="plan-section">
                <h4>Your Plan</h4>
                <div
                  className={`plan-option ${
                    selectedPlan === "single" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlan("single")}
                >
                  Price per Test - ₹99
                </div>
                <div
                  className={`plan-option ${
                    selectedPlan === "package" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlan("package")}
                >
                  Package of 5 Tests - ₹399
                </div>

                <p className="amount">
                  Amount to be paid{" "}
                  <strong>
                    {selectedPlan === "single" ? "₹99" : "₹399"}
                  </strong>
                </p>

                <button className="payment-btn">Proceed To Payment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
