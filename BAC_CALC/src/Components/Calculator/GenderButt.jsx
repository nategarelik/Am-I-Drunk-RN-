import {React, useState} from 'react';
import './Calculator.css';

const GenderButt = ({ image, value, setSex, name, textColor, gender }) => {

    const isActiveGender = gender === value;
  
    return (
      <>
        <div className='genderButtDiv'>
            <button 
                    className='GenderButt' 
                    style={{ backgroundImage: `url(${image})` }} 
                    onClick={() => setSex(value)}
                >
            </button>
            <p style={{color: isActiveGender ? 'orange' : 'white'}}>{name}</p>
        </div>
      </>
    );
  }
  

export default GenderButt;
