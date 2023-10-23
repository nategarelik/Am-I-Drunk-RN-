import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
        <div className='FooterSection'>
            <ul>
            <li><Link className='FootLink' to='/'>HOME</Link></li>
              <li><Link className='FootLink' to='/About'>ABOUT</Link></li>
                {/* <li>Card Formats</li> */}
                <li><Link className='FootLink' to='/Calculator'>CALCULATOR</Link></li>
            </ul>
            <p>Developed by Nathaniel Garelik</p>
        </div>
    </>
  )
}

export default Footer