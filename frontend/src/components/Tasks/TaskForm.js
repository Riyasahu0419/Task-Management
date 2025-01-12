import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const TaskForm = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/tasks', {
            title,
            description,
            status,
            priority,
        }, {
            headers: { Authorization: `Bearer ${user}` },
        });
        // Optionally, reset the form or fetch tasks again
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description"></textarea>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;