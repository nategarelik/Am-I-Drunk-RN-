import React from 'react';
import './Calculator.css'

const CalculatorButton = ({ image, value, onAdd }) => {
  return (
    <button className='CalcButt' onClick={() => onAdd(value)} style={{ backgroundImage: `url(${image})` }}>
    </button>
  );
};

export default CalculatorButton;
