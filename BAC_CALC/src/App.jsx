import { useState } from 'react'; 
import './App.css';
import Layout from './Layout';
import Launch from './Components/Launch/Launch';
import About from './Components/About/About';
import Calculator from './Components/Calculator/Calculator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Launch/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Calculator" element={<Calculator/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
