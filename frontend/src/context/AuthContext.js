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
            localStorage.setItem('token', token); // Store the token in localStorage
        } catch (error) {
            console.error('Login error:', error.message);
            alert('Login failed. Please check your credentials.');
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

// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Login function
//    const login = async (email, password) => {
//     try {
//         const response = await axios.post('http://localhost:4000/auth/login', { email, password });
//         const token = response.data.token;

//         if (token) {
//             setUser(token);  // Set the user with the token
//             localStorage.setItem('token', token); // Store the token in localStorage
//             console.log('Login successful:', response.data);
//         } else {
//             throw new Error('No token received from server');
//         }
//     } catch (error) {
//         console.error('Login error:', error.response ? error.response.data.message : error.message);
//         throw error; // Throw the error so Login.js can handle it
//     }
// };

    

//     // Logout function
//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('token');
//     };

//     // Check for token on initial load
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             setUser(token);
//         }
//         setLoading(false);  // Set loading to false after the token check
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, login, logout, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;