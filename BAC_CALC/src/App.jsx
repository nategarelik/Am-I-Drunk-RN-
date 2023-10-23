import { useState } from 'react'; 
import './App.css';
import Layout from './Layouts/Layout';
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
        </Route>
        <Route path="/About" element={<Layout/>}>
          <Route index element={<About/>}/>
        </Route>
        <Route path="/Calculator" element={<Layout/>}>
          <Route index element={<Calculator/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
