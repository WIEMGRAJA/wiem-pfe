import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Check if form submission is triggered

        // Frontend validation
        if (!email || !password) {
            setErrorMessage("Email and password are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/signin", {
                email: email,
                password: password
            });
            console.log("Response:", response.data.role); // Check the response from the server
            if (response.data.role == "trainer" ) {
                // Login successful
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
                console.log("Login successful");
                // You can perform additional actions here, such as redirecting the user
            }
             if (response.data.role == "learner" ) {
                // Login successful
                setTimeout(() => {
                    navigate('/HomeLeaner');
                }, 2000);
                console.log("Login successful");
                // You can perform additional actions here, such as redirecting the user
            }
            else {
                // Login failed
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage("An error occurred while logging in. Please try again later.");
        }
    };

    console.log("Rendering Login component"); // Check if component renders

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Log In</button>
            </form>

            <button className="link-btn" onClick={() => onFormSwitch('register')}>
                <Link to='/register'>
                Don't have an account? Register here.
                </Link>
                </button>
        </div>
    );
};
