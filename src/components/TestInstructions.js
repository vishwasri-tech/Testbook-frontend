import React, { useState } from "react";
import "./TestInstructions.css";

const TestInstructions = () => {
  const [isOpen, setIsOpen] = useState(true); // modal visibility state

  // Close modal handler
  const handleClose = () => {
    setIsOpen(false);
  };

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
            <h2 className="modal-title">Test Instructions</h2>

            {/* Instructions */}
            <ol className="instructions">
              <li>Total Duration: 60 minutes</li>
              <li>Each correct answer: +1 mark</li>
              <li>Wrong answer: -0.25 mark</li>
              <li>No marks for unattempted questions</li>
              <li>Don’t refresh or close the test window</li>
              <li>Timer will auto-submit the test once it ends</li>
            </ol>

            {/* Start Button */}
            <button className="start-btn2">Start Test</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestInstructions;
