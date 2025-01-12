import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const TaskList = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:5000/tasks', {
                headers: { Authorization: `Bearer ${user}` },
            });
            setTasks(response.data);
        };

        if (user) {
            fetchTasks();
        }
    }, [user]);

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                        <p>Priority: {task.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;