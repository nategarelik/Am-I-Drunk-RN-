import React from 'react'
import "./About.css"


const About = () => {
  return (
    <>
    <div className='main-container'>
        <h1 className='main-header'>ABOUT THE APP</h1>
        <h2 className='main-header'>What's it for?</h2>
        <p>"Am I Drunk Rn?" is the drunk persons solution to determining where they rank on the BAC scale, and how long its gonna take to get off it.
           Introducing a simplified version of the long elaborate charts we were all shown in health class.
           "Am I drunk Rn?" aims to save people before alcohol poisioning takes effect. In using this app, byte</p>
        <h2 className='main-header'>How do I use it?</h2>
        <p>To use the calculator is simple. Head over to the calculate page, and enter your weight, gender, and amount of hours since last drink.
          All of these factors affect your BAC. Then, select everything you drank and press calculate to see your level of intoxication. Have a fun time drinking, and please stay safe!</p>
        <h2>PLEASE NOTE</h2>
        <p>All BAC calculations are estimations and not 100% accurate. Please drink responsibly and DO NOT use a low BAC
          calculation to justify going behind the wheel. Operating a motor vehicle after ANY consumption of alcohol is dangerous to
          yourself and the people around you.
        </p>

        <h2>CONTACT ME</h2>
        <ul>
          <li>Email: Nate2g8@gmail.com</li>
          <li><a href="www.linkedin.com/in/nathaniel-garelik-0b7304296">LinkedIn</a></li>
          <li>Check out my other website!: <a href="https://feedafriendbx.com/">Feed A Friend</a></li>
        </ul>

    </div>
  
</>
  )
}

export default About