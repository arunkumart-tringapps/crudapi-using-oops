import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Navbar from './Components/layouts/Navbar.js'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './Components/Employee/AddEmployee';
import UpdateEmployee from './Components/Employee/UpdateEmployee';


function App() {
  return (
    
      <Router>
        <div className='App'>
      <Navbar />
        <Routes>
          <Route  path = '/home' element ={<Home />}/>
          <Route  path = '/about' element ={<About />}/>
          <Route  path = '/contact' element ={<Contact />}/>
          <Route path = '/addemployee' element = {<AddEmployee />}/>
          <Route path = '/updateemployee/:id' element = {<UpdateEmployee />} />

        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
