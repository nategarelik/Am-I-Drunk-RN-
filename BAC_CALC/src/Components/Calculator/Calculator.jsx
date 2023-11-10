import React, { useState, useEffect, useContext} from 'react';
import CalculatorButton from './CalculatorButton';
import './calculator.css'
import GenderButt from './GenderButt';
import PopupCard from './PopupCard/PopupCard';
import SliderComponent from './SliderComponent';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BACContext from './BACContext';
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
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('');
  const [hours, setHours] = useState(0);
  const { setBAC } = useContext(BACContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [weightSet, setweightSet] = useState(false);
  const [showWeightPopup, setShowWeightPopup] = useState(false);
  const [BorgDisplay, setBorgDisplay] = useState('none')

  useEffect(() => {
    setBAC(0);
    // Any other initialization logic can go here
  }, []);

  const handleAdd = (value) => {
      setStandardDrinkNum(prevDrinkNum => prevDrinkNum + value);
  };

  const handleSliderSubmit = (sliderValue) => {
    const sliderStandardDrinks = (sliderValue / 100) * 14;
    setStandardDrinkNum(prevDrinkNum => prevDrinkNum + sliderStandardDrinks);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleWeightPopup = () => {
    setShowWeightPopup(!showWeightPopup);
  };

  // Females: .55 r constant

// Males:.68 r constant
const handleCalculate = () => {
  const standardDrinkCalcGram = standardDrinkNum * 14;

  // Convert weight from pounds to grams
  const weightInGrams = weight / 0.0022046;


  if ((gender === 'Male')) {
      const weightCalcNew = weightInGrams * 0.68;
      const BACraw = standardDrinkCalcGram / weightCalcNew;
      let BAC = BACraw * 100;
      if (hours > 0) {
          const BACHoursSUBTRACT = hours * 0.015;
          BAC -= BACHoursSUBTRACT;
      }
      setBAC(BAC);
      console.log(BAC, weight, gender);
      navigate('BACpage', { state: { BAC: BAC } });
  }

  if (gender === 'Female') {
      const weightCalcNew = weightInGrams * 0.55;
      const BACraw = standardDrinkCalcGram / weightCalcNew;
      let BAC = BACraw * 100;
      if (hours > 0) {
          const BACHoursSUBTRACT = hours * 0.015;
          BAC -= BACHoursSUBTRACT;
      }
      setBAC(BAC);
      console.log(BAC, weight, gender)
      navigate('BACpage', { state: { BAC: BAC } });
  }

  if (gender === '') {
    alert("Please set a gender before calculating your BAC.")
}

if (weight === 0) {
  alert("Please set a weight before calculating your BAC.")
}
};

  const numberDropdownRef = React.useRef(null);
  const createDropdown = () =>{
    const select = numberDropdownRef.current;
    if (!select) return;
    select.innerHTML = '';
    setBorgDisplay('block')
    

    for (var i = 0; i <= 100; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i.toString();
        select.appendChild(option);
    }};

  const resetCalculation = () => {
   setStandardDrinkNum(0);
   setBAC(0);
  };

  const setSex = (value) => {
    setGender(value);
    setWeight(true)
    togglePopup()
};

  return (

        <div className='calculator-container'>

              
        <h1 id='mainHead'>Calculate Your BAC</h1>

        <div className='popupDiv'>

        <div>
          <button onClick={togglePopup}>Select Gender</button>
          <PopupCard show={showPopup} handleClose={togglePopup}>
            <div className='genderSelect'>
              <h3 className='genderHeader'>Gender</h3>
              <div className='genderPic-grid'>
              <GenderButt name={'Man'} image={manPic} value={'Male'} setSex={setSex} gender={gender} />
              <GenderButt name={'Woman'} image={womanPic} value={'Female'} setSex={setSex} gender={gender} />
              {/* <GenderButt name={'Other'} image={neutralPic} value={'other'} setSex={setSex} gender={gender} /> */}

              </div>
            
            </div>
          </PopupCard>
          {gender ? <p>Gender: {gender}</p> : <p>Gender:</p>}

        </div>

        <div>
          <button onClick={toggleWeightPopup}>Enter Weight</button>
          <PopupCard show={showWeightPopup} handleClose={toggleWeightPopup}>
          <div>
          <label>
            Weight (lbs):
            <input 
              type="number" 
              value={weight} 
              onClick={(e) => e.target.value = ""}
              onChange={(e) => setWeight(e.target.value)} 
              placeholder="Enter your weight"
            />
          </label>
        </div>
          </PopupCard>
          {weight ? <p>Weight:{weight}</p> : <p>Weight:</p>}

        </div>



        </div>




        <div className='hourSelectDiv'>
          <label>
            How Many Hours Since Your Last Drink?:
            <input  className='hourSelect'
              type="number" 
              value={hours} 
              onChange={(e) => setHours(e.target.value)} 
              placeholder="Enter How Long"
            />
          </label>
        </div>

        <div className='BAC-Display'>
          <p>Std. Drink #:</p>
            <div className='numberDiv'>
              <p>{standardDrinkNum}</p>
            </div>
        </div>

        <div className='buttons-grid'>

          <CalculatorButton 
              image={clawPic} 
              value={1.3} 
              onAdd={handleAdd}
              name={"Hard Seltzer"}
          />

          <CalculatorButton 
              image={Beerpic} 
              value={1.1} 
              onAdd={handleAdd}
              name={"Beer"}
          />

          <CalculatorButton 
              image={shotPic} 
              value={1} 
              onAdd={handleAdd}
              name={"Shot"}
          />
          <CalculatorButton 
              image={margaritaPic}
              value={1.5} 
              onAdd={handleAdd}
              name={"Cocktail"}
          />

          <CalculatorButton 
              image={winePic} 
              value={1.6} 
              onAdd={handleAdd}
              name={"Wine"}
          />
          <CalculatorButton 
              image={lokoPic}
              value={5.5} 
              onAdd={handleAdd}
              name={"Four Loko"}
          />

          <CalculatorButton 
                      image={jelloPic} 
                      value={0.25} 
                      onAdd={handleAdd}
                      name={"Jello Shot"}
                  />

        <div>
        <CalculatorButton 
                        image={borgPic} 
                        value={(14 / (numberDropdownRef.current ? numberDropdownRef.current.value : 1))} 
                        onAdd={createDropdown}
                        name={"BORG/\nPitcher"}
                    />
                <SliderComponent ref={numberDropdownRef} borgDisplay={BorgDisplay} onSliderSubmit={handleSliderSubmit} ></SliderComponent>




        </div>
        </div>

          <div className='calculateDiv'>
            <button onClick={resetCalculation} className='reset-button'>RESET</button>
              <button onClick={handleCalculate} className='Calculate-button'>CALCULATE</button>

          </div>
        
        </div>



   
  );
};

export default Calculator;
