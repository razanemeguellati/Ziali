
import React, { useState } from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import Navbar from './Components/Navbar';
import Profile from './Pages/Profile';
import Signaler from './Pages/Signaler';
import SS from './Pages/SingleSignalement';
import FilActualite from './Pages/Filactualite';
import LandingPage from './Pages/Landingpage' ; 
import Modifier from "./Pages/Modifier";
import Login from "./Pages/Login";

function App() {
  return (
    
   <main className="section-container relative">
      <Router>

        <Navbar  className="absolute z-20 "> </Navbar>

      <div className=" pt-24 lg:pt-16"> 

          <Routes>
              <Route index path="/" element={<LandingPage/>}/>
              <Route path="/Actualite" element={<FilActualite/>}/>
              <Route path="/Signaler" element={<Signaler/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Actualite/:id" element={<SS/>}/> 
              <Route path="/Profile/:id" element={<SS/>}/> 
              <Route path="/Modifier" element={<Modifier/>}/> 
              <Route path="/Login" element={<Login/>}/> 
          </Routes>
      </div>
        
      </Router>
    </main>
   

  );
}

export default App;
