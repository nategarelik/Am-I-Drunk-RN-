// initialBACpage.jsx
import React, { useContext, useState, useEffect } from 'react';
// import BACContext from './BACContext.js';
import './BAC.css'

const BACpage = () => {
 
  const stumbleGif = "https://media.tenor.com/fd20tOF0wLkAAAAM/falling-down.gif"
  const goodGif = "https://media1.giphy.com/media/XreQmk7ETCak0/giphy.gif?cid=6c09b952424gbu9ne9tq9iffbpgqvuhpe73n5e8m0gpkd8ii&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  const dancingGif = "https://media.tenor.com/3eri_SsI4RQAAAAC/amiii-dance.gif"
  const blackoutGif = "https://i.redd.it/fri0tqthbd661.gif"
  const stopDrank = "https://static.vecteezy.com/system/resources/previews/008/603/994/non_2x/ban-alcohol-black-silhouette-icon-drink-alcohol-forbidden-pictogram-wine-bottle-and-glass-red-stop-sign-dry-january-symbol-non-allowed-alcohol-warning-no-drunk-isolated-illustration-vector.jpg"
  const imgNotFound = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"

  //BACs
  const savedBAC = localStorage.getItem('BAC');
  const initialBAC = savedBAC ? parseFloat(savedBAC) : 0;
  // const { initialBAC } = useContext(BACContext);
  
  //useStates
  const [intoxLevel, setintoxLevel] = useState('No Level Set.')
  const [intoxPhoto, setIntoxPhoto] = useState('')
  const [lowerHeader, setLowerHeader] = useState('No BAC calculated.')
  const [timeToSober, settimeToSober] = useState('')
  const [textColor, settextColor] = useState('white')
  
  
  useEffect(() => {
    toSetIntoxLevel();
  }, [initialBAC]);
  
  useEffect(() => {
    checkIntoxLevel();
    settimeToSober(whenSober(initialBAC))
  }, [intoxLevel]);
  

  const whenSober = (BAC) => {
    let hoursToSober = 0
    while (BAC > 0){
      BAC -= .015;
      hoursToSober += 1
    }
    return hoursToSober;
  }
  const toSetIntoxLevel = () => {
    if (initialBAC <= .03) {
      setintoxLevel("Safe to Drive");
    } else if (initialBAC <= .07 && initialBAC > .03) {
      setintoxLevel("Impaired");
    } else if (initialBAC >= .071 && initialBAC < .2) {
      setintoxLevel("Legally Intoxicated");
    } else if (initialBAC >= .2 && initialBAC < .25) {
      setintoxLevel("Possible Blackout");
    } else if (initialBAC > .25 && initialBAC < .4) {
      setintoxLevel("Alcohol Poisoning Risk");
    } else if (initialBAC >= .4) {
      setintoxLevel("Onset Coma");
    }
  }

  const checkIntoxLevel = () => {
    switch (intoxLevel) {
      case 'Safe to Drive':
        console.log('Nice Man, Drive away!');
        setIntoxPhoto(goodGif)
        setLowerHeader("Your BAC indicates you are under the legal limit to drive and sober.")
        settextColor('green')
        break;
      case 'Impaired':
        console.log("Slow down bud, I wouldn't drive if I were you")
        setIntoxPhoto(dancingGif) 
        setLowerHeader(`Your BAC indicates you are impaired. You are legally unable to operate motor vehicles and heavy machinary. It will be ${timeToSober} hours until you are sober.`)
        settextColor('yellow')
        break;
      case 'Legally Intoxicated':
        console.log('You are legally Intoxicated');
        setIntoxPhoto(stumbleGif)
        setLowerHeader(`Your BAC indicates you are legally intoxicated. Intoxication can lead to slurred speech and an inability to control the body. It will be ${timeToSober} hours until you are sober. `)
        settextColor('red')
        break;
      case 'Possible Blackout':
        console.log('You are at risk of blacking out');
        setIntoxPhoto(blackoutGif)
        setLowerHeader(`Your BAC indicates you are drunk and at risk of blacking out. Please slow down and stay safe. It will be ${timeToSober} hours until you are sober.`)
        settextColor('orange')
        break;
      case 'Alcohol Poisioning Risk':
        console.log('Alcohol Poisioning Risk');
        setIntoxPhoto(stopDrank)
        setLowerHeader('Your BAC indicates you are at risk of alcohol poisioning! Please call this help hotline! 800-222-1222')
        settextColor('red')
        break;
      case 'Onset Coma':
        console.log('Coma Immienent');
        setIntoxPhoto(stopDrank)
        setLowerHeader('Your initialBAC indicates you are entering an onset coma! Please call this help hotline! 800-222-1222')
        settextColor('red')
        break;
      default:
        console.log('No Intox Level Set');
        setIntoxPhoto(imgNotFound)
        setLowerHeader('No Intox Level has been set, please recalculate your BAC')
    }
  }
  

  return (

    <div className='bac-container'>
            <h1 style={{color:textColor}} className='bac-header'>Your BAC is: {initialBAC || 'No BAC calculated'}</h1>
            <div className='logo-Container'>
             
              <div id="gifImage"> <img src={intoxPhoto} alt="intoxPhoto" /></div>
            </div>

            <h1 style={{color:textColor}} className='lower-header'>{lowerHeader}</h1>
        </div>
  );
};

export default BACpage;
