import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = ({ onFormSwitch }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
    const [role, setRole] = useState('trainer'); // New state for role selection

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/signup", {
                firstname: firstName,
                lastname: lastName,
                number: number,
                email: email,
                password: password,
                role: role // Include role in the request body
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-form-container">
            
            <h2>Register</h2>
            
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                />
                <label htmlFor="number">Number:</label>
                <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    name="number"
                    id="number"
                    placeholder="Number"
                />
                <label htmlFor="email">Email:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="password">Password:</label>
                <div style={{ display: 'flex' }}>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"} // Change type dynamically
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                
                {/* Radio buttons for selecting role */}
                <div>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="trainer"
                            checked={role === 'trainer'}
                            onChange={() => setRole('trainer')}
                        />
                        Trainer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="learner"
                            checked={role === 'learner'}
                            onChange={() => setRole('learner')}
                        />
                        Learner
                    </label>
                </div>
                
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => onFormSwitch('login') }>
                <Link to='/login'>
                Already have an account? Login here
                </Link>
                </button>
            
        </div>
    );
};
