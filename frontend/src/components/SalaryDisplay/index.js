import React from 'react';
import './index.css';

const SalaryDisplay = ({ title = "Salary Per Month", range = "$50k - $80k" }) => {
  return (
    <div className="salary-display">
      <div className="salary-title">{title}</div>
      <div className="salary-range">{range}</div>
    </div>
  );
};

export default SalaryDisplay;