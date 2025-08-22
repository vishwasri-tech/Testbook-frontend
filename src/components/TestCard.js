import React from 'react';
import './TestSeries.css';
import { useNavigate } from "react-router-dom";

function TestCard({ data }) {
    const navigate = useNavigate();
     const handleTakeTest = () => {
      
    navigate('/signup'); // navigate to signup page
  };
  return (
    <div className="test-card">
      <div className="test-card-header">
        <img src={data.icon} alt="icon" className="test-icon" />
        <h3 className="test-title">{data.title}</h3>
      </div>

      <div className="test-details">
        <p><strong>Example Test:</strong> {data.exampleTest}</p>

        <ul>
          <li><strong>Duration:</strong> {data.duration}</li>
          <li><strong>Coverage:</strong> {data.coverage}</li>
          <li><strong>Features:</strong> {data.features}</li>
          <li><strong>Ranking:</strong> {data.ranking}</li>
        </ul>
      </div>

      <div className="test-card-btn-container">
        <button className="take-test-btn"  onClick={handleTakeTest}>Take This Test →</button>
      </div>
    </div>
  );
}

export default TestCard;


