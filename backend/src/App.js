import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';

import { Login } from './Login.jsx';
import { Register } from "./Register.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

  useEffect(() => {
    // Check if user is already authenticated (e.g., via token stored in localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleForm = () => {
    setCurrentForm(currentForm === "login" ? "register" : "login");
  };

  const handleLogin = async () => {
    // Perform login logic, e.g., send login request to server
    try {
      // Simulate login for demonstration (replace with actual login logic)
      const response = await axios.post("http://localhost:3000/signin", {
        email: "user@example.com",
        password: "password123"
      });
      console.log(response.data);

      // Set isLoggedIn state to true upon successful login
      setIsLoggedIn(true);

      // Store token in localStorage or session storage for persistent authentication
      localStorage.setItem("token", response.data.token); // Assuming your server returns a token upon successful login

    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Perform logout logic, e.g., clear authentication token and update state
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
