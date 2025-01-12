import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from './Auth/Login';
import Register from './Auth/Register';
import TaskList from './Tasks/TaskList';
import TaskForm from './Tasks/TaskForm';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/add-task" element={<TaskForm />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;