import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomeLeaner from "./HomeLeaner/HomeLeaner.js";
import { Login } from './Login.jsx';
import { Register } from "./Register.jsx";
import Home from "./TrainerPage/Home.js";



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm(currentForm === "login" ? "register" : "login");
  };

  return (
    <div className='App'>
      
      {/* {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}
<Routes>
<Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
  <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
  <Route path="/HomeLeaner" element={<HomeLeaner />} />

  </Routes>
    </div>
  );
}

export default App;