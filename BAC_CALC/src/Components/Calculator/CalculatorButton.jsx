import React from 'react';
import './Calculator.css'

const CalculatorButton = ({ image, value, onAdd, name }) => {
  return (
    <div className='calculateButtDiv'>
      <button className='CalcButt' onClick={() => onAdd(value)} style={{ backgroundImage: `url(${image})` }}>
    </button>
    <p>{name}</p>

    </div>
  );
};

export default CalculatorButton;
