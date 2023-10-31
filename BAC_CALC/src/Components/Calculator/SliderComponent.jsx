import React, { useState, forwardRef } from 'react';

const SliderComponent = forwardRef((props, ref) => {
  const [rangeValue, setRangeValue] = useState(0);
  const { borgDisplay} = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const handleInput = (event) => {
    setRangeValue(event.target.value);
    props.onSliderChange(event.target.value);
  };

  const resetSlider = () => {
    setRangeValue(0);
};

  return (
    <>
      <div  style={{display:borgDisplay}}className="slider">
        <p>% Drank?</p>
      <input
        ref={ref}
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onInput={handleInput}
      />
      <p>{rangeValue}</p>
      <button 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? 'orange' : 'gray',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        height: 'fit-content',
        width: 'fit-content',
        transition: 'background-color 0.3s ease'
      }}
      onClick={() => { props.onSliderSubmit(rangeValue); resetSlider(); }}>Add Drinks</button>

      </div>
     
    </>
    
  );
})

SliderComponent.displayName = 'SliderComponent'; 
export default SliderComponent;
