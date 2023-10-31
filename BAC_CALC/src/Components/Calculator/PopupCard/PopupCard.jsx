import React, { useState } from 'react';
import './PopupCard.css'; // Import styling file

const PopupCard = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "popup display-block" : "popup display-none";

  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        {children}
        <button className='CloseButt' onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default PopupCard;