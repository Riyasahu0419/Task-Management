// import React, { useContext, useState } from 'react';
// import AuthContext from '../../context/AuthContext';

// const Login = () => {
//     const { login } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(email, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation for email and password
        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }

        setError(''); // Clear any previous errors
        setLoading(true); // Set loading state to true

        try {
            await login(email, password);
            console.log('Login successful');
            // You can add a success message or redirect here, if needed
        } catch (error) {
            console.error('Error during login:', error);
            setError('Failed to login. Please check your credentials and try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
            
            <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default Login;
