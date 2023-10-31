// BACpage.jsx
import React, { useContext, useState, useEffect } from 'react';
import BACContext from './BACcontext';
import '../Main/Main.css';

const BACpage = () => {
  const { BAC } = useContext(BACContext);
  const [intoxLevel, setintoxLevel] = useState('second')
  const [intoxPhoto, setIntoxPhoto] = useState('')

  useEffect(() => {
    toSetIntoxLevel()
    checkIntoxLevel()
  }, [BAC])
  

  const toSetIntoxLevel = () => {
    if (BAC <= .03) {
      setintoxLevel("Safe to Drive")
    }
    if (BAC <= .07 & BAC > .03) {
      setintoxLevel("Impaired")
    }
    if (BAC >= .071 & BAC < .2) {
      setintoxLevel("Legally Intoxicated")
    }
    if (BAC >= .2 & BAC < .25) {
      setintoxLevel("Possible Blackout")
    }
    if (BAC > .25 & BAC < .4) {
      setintoxLevel("Alcohol Poisoning Risk")
    }
    if (BAC >= .4) {
      setintoxLevel("Onset Coma")
    }
  }

  const checkIntoxLevel = () => {
    switch (intoxLevel) {
      case 'Safe to Drive':
        console.log('Nice Man, Drive away!');
        break;
      case 'Impaired':
        console.log("Slow down bud, I wouldn't drive if I were you")
        break;
      case 'Legally Intoxicated':
        console.log('You are legally Intoxicated');
        break;
      case 'Possible Blackout':
        console.log('You are legally Intoxicated');
        break;
      case 'Alcohol Poisioning Risk':
        console.log('You are legally Intoxicated');
        break;
      case 'Onset Coma':
        console.log('You are legally Intoxicated');
        break;
      default:
        console.log('No Intox Level Set');
    }
  }
  

  return (

    <div className='bac-container'>
            <h1 className='bac-header'>Your BAC is: {BAC || 'No BAC calculated'}</h1>
            <div className='logo-Container'>
              <img src={intoxPhoto} alt="intoxPhoto" />
            </div>
        </div>
  );
};

export default BACpage;
