import React from 'react'
import './Calculator.css'

const GenderButt = ( image, value, setSex, name) => {
  return (
    <>
        <button className='GenderButt' style={{ backgroundImage: `url(${image})` }} onClick={() => setSex(value)} >
        </button>
        {name}
    
    </>
   
  )
}

export default GenderButt