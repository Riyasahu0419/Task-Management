import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/login', { email, password });
            const token = response.data.token;
            setUser(token);  // Set the user with the token
            localStorage.setItem('token', token);
             // Store the token in localStorage
        } catch (error) {
            console.error('Login error:', error.message);
            // alert('Login failed. Please check your credentials.');
        }
    };

    const logout = () => {
        setUser (null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser (token);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;


