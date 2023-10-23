import React from 'react'
import '../Main/Main.css';
import BeerLogo from '../../assets/BeerLogo.png'
import { Link } from 'react-router-dom';

function Launch() {
  return (
    <>
        <div className='main-container'>
            <h1 className='main-header'>AM I DRUNK RN?</h1>
            <div className='logo-Container'>
                <img className="BeerLogo" src={BeerLogo} alt="Beer Logo" />
            </div>
            
            <div className='button-container'><Link className='FootLink' to='/Calculator'><button>CALCULATE</button></Link></div>
        </div>
      
    </>
  )
}

export default Launch