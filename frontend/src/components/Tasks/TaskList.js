import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const TaskList = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null); // Track the task being edited
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // Fetch tasks
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:4000/tasks', {
                headers: { Authorization: `Bearer ${user}` },
            });
            setTasks(response.data);
        };

        if (user) {
            fetchTasks();
        }
    }, [user]);

    // Remove a task
    // const handleRemove = async (taskId) => {
    //     try {
    //         await axios.delete(`http://localhost:4000/tasks/${taskId}`, {
    //             headers: { Authorization: `Bearer ${user}` },
    //         });
    //         setTasks(tasks.filter((task) => task._id !== taskId));
    //     } catch (error) {
    //         console.error('Error removing task:', error);
    //     }
    // };

    // Mark a task as completed
    const handleMarkAsCompleted = async (taskId) => {
        try {
            const updatedTask = await axios.put(
                `http://localhost:4000/tasks/${taskId}`,
                { status: 'Completed' },
                {
                    headers: { Authorization: `Bearer ${user}` },
                }
            );
            setTasks(tasks.map((task) => (task._id === taskId ? updatedTask.data : task)));
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    // Edit task functionality
    const handleEdit = (task) => {
        setEditingTask(task._id);
        setEditTitle(task.title);
        setEditDescription(task.description);
    };

    const handleUpdate = async () => {
        try {
            const updatedTask = await axios.put(
                `http://localhost:4000/tasks/${editingTask}`,
                { title: editTitle, description: editDescription },
                {
                    headers: { Authorization: `Bearer ${user}` },
                }
            );
            setTasks(tasks.map((task) => (task._id === editingTask ? updatedTask.data : task)));
            setEditingTask(null); // Clear editing mode
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {editingTask === task._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                ></textarea>
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={() => setEditingTask(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Status: {task.status}</p>
                                <p>Priority: {task.priority}</p>
                                <button onClick={() => handleMarkAsCompleted(task._id)}>
                                    Mark as Completed
                                </button>
                                <button onClick={() => handleEdit(task)}>Edit</button>
                               
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
