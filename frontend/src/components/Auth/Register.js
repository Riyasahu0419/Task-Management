import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await axios.post('http://localhost:5000/auth/register', { fullName, email, password });
        try {
            const response = await axios.post('http://localhost:4000/auth/register', { fullName, email, password });

            alert('Registration successful:', response.data);
            Navigate("/login")
            
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
            // alert('Failed to register. Please try again.'); // Display an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
            
            
        </form>
    );
};

export default Register;