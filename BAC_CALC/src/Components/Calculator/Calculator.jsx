import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import './calculator.css'
import GenderButt from './GenderButt';

// Pic Imports
import clawPic from '../../assets/drinkPhotos/clawPic.jpg';
import Beerpic from '../../assets/drinkPhotos/BeerPic.webp';
import lokoPic from '../../assets/drinkPhotos/lokoPic.jpg';
import winePic from '../../assets/drinkPhotos/winePic.jpg';
import shotPic from '../../assets/drinkPhotos/shotPic.jpg';
import margaritaPic from '../../assets/drinkPhotos/margaritaPic.jpg';
import jelloPic from '../../assets/drinkPhotos/jelloPic.jpg';
import borgPic from '../../assets/drinkPhotos/borgPic.png';
import manPic from '../../assets/genderPics/manPic.jpg';
import womanPic from '../../assets/genderPics/womanPic.webp';
import neutralPic from '../../assets/genderPics/neutralPic.jpg';


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

  const setSex = (value) => {
    setGender(value);
   };

  return (

    <div className='calculator-container'>
      <h1 id='mainHead'>Calculate Your BAC</h1>
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
      <div className='genderSelect'>
        <h3 className='genderHeader'>Gender</h3>
        <div className='genderPic-grid'>
          <GenderButt name={'Man'} image={manPic} value={'male'} setSex={setSex}/>
          <GenderButt name={'Woman'} image={womanPic} value={'female'} setSex={setSex}/>
          <GenderButt name={'Other'} image={neutralPic} value={'other'} setSex={setSex}/>
        </div>
        
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
                    image={jelloPic} 
                    value={1} 
                    onAdd={handleAdd}
                />

        <CalculatorButton 
                    image={borgPic} 
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
