import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/auth/register', { fullName, email, password });
            alert('Registration successful: ' + response.data.message);
            navigate('/login'); 
        } catch (error) {
            const errorMsg = error.response ? error.response.data.message : error.message;
            console.error('Error during registration:', errorMsg);
            setErrorMessage('Failed to register. Please try again.');
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Create an Account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="register-input"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="register-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="register-input"
                />
                <button type="submit" className="register-button">Register</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="login-prompt">
                Already have an account?{' '}
                <button
                    className="login-button"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default Register;
