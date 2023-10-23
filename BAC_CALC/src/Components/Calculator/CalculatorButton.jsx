import React from 'react';
import './calculator.css'

const CalculatorButton = ({ image, value, onAdd }) => {
  return (
    <button onClick={() => onAdd(value)} style={{ background: `url(${image})`, height: '50px', width: '50px' }}>
    </button>
  );
};

export default CalculatorButton;
