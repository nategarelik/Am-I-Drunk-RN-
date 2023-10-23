import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import './calculator.css'

// Pic Imports
import clawPic from '../../assets/drinkPhotos/clawPic.jpg';
import Beerpic from '../../assets/drinkPhotos/BeerPic.webp';
import lokoPic from '../../assets/drinkPhotos/lokoPic.jpg';
import winePic from '../../assets/drinkPhotos/winePic.jpg';
import shotPic from '../../assets/drinkPhotos/shotPic.jpg';
import margaritaPic from '../../assets/drinkPhotos/margaritaPic.jpg';

const Calculator = () => {
  const [standardDrinkNum, setStandardDrinkNum] = useState(0);
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [hours, setHours] = useState(0);

  const handleAdd = (value) => {
    setStandardDrinkNum(prevDrinkNum => prevDrinkNum + value);
  };

  const handleCalculate = () => {

    console.log(`Final drink value: ${standardDrinkNum}`);
    console.log(`User's weight: ${weight}`);
    console.log(`User's gender: ${gender}`);
  };

  const resetCalculation = () => {
   setStandardDrinkNum(0);
  };

  return (

    <div className='calculator-container'>
      <h1>Calculate Your BAC</h1>
      <div>
        <label>
          Weight (lbs):
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="Enter your weight"
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          How Much Time Has Passed Since You Last Drank? (Hrs):
          <input 
            type="number" 
            value={hours} 
            onChange={(e) => setHours(e.target.value)} 
            placeholder="Enter How Long"
          />
        </label>
      </div>

      <div className='buttons-grid'>

        <CalculatorButton 
            image={clawPic} 
            value={1} 
            onAdd={handleAdd}
        />

        <CalculatorButton 
            image={Beerpic} 
            value={1} 
            onAdd={handleAdd}
        />

        <CalculatorButton 
            image={shotPic} 
            value={1} 
            onAdd={handleAdd}
        />
        <CalculatorButton 
            image={margaritaPic}
            value={1} 
            onAdd={handleAdd}
        />

        <CalculatorButton 
            image={winePic} 
            value={1} 
            onAdd={handleAdd}
        />
        <CalculatorButton 
            image={lokoPic}
            value={1} 
            onAdd={handleAdd}
        />

        <CalculatorButton 
                    image={shotPic} 
                    value={1} 
                    onAdd={handleAdd}
                />

      </div>

        <div className='BAC-Display'>
            <h2>Standard Drinks AMT:</h2>
            <p>{standardDrinkNum}</p>
        </div>

        <button onClick={resetCalculation} className='reset-button'>RESET</button>

    </div>
  );
};

export default Calculator;
