import { useState } from 'react'; 
import './App.css';
import Layout from './Layouts/Layout';
import BACContext from './Components/Calculator/BACcontext';
import Launch from './Components/Launch/Launch';
import About from './Components/About/About';
import Calculator from './Components/Calculator/Calculator';
import BACpage from './Components/Calculator/BACpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [BAC, setBAC] = useState(null);
  return (
    <BACContext.Provider value={{ BAC, setBAC }}>
      <Router> 
              <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Launch/>}/>
                </Route>
                <Route path="/About" element={<Layout/>}>
                  <Route index element={<About/>}/>
                </Route>
                <Route path="/Calculator" element={<Layout/>}>
                  <Route index element={<Calculator/>}/>
                  <Route path="BACpage" element={<BACpage/>} />
                </Route>
          
              </Routes>
          </Router>
    </BACContext.Provider>
        
  );
}

export default App;
