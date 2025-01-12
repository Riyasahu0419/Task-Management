

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import AuthContext from '../../context/AuthContext';
// import './TaskForm.css'; // Import the CSS file for styling

// const TaskForm = () => {
//     const { user } = useContext(AuthContext);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [status, setStatus] = useState('To Do');
//     const [priority, setPriority] = useState('Medium');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post(
//             'http://localhost:4000/tasks',
//             {
//                 title,
//                 description,
//                 status,
//                 priority,
//             },
//             {
//                 headers: { Authorization: `Bearer ${user}` },
//             }
//         );
//         navigate("/tasks")
//         // Optionally, reset the form or fetch tasks again
//     };

//     return (
//         <div className="task-form-container">
//             <h2 className="form-title">Create a New Task</h2>
//             <form className="task-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Task Title</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         placeholder="Enter task title"
//                         required
//                         className="form-input"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Task Description</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         placeholder="Enter task description"
//                         className="form-textarea"
//                     ></textarea>
//                 </div>

//                 <div className="form-group">
//                     <label>Status</label>
//                     <select
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                         className="form-select"
//                     >
//                         <option value="To Do">To Do</option>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                     </select>
//                 </div>

//                 <div className="form-group">
//                     <label>Priority</label>
//                     <select
//                         value={priority}
//                         onChange={(e) => setPriority(e.target.value)}
//                         className="form-select"
//                     >
//                         <option value="Low">Low</option>
//                         <option value="Medium">Medium</option>
//                         <option value="High">High</option>
//                     </select>
//                 </div>

//                 <button type="submit" className="form-submit-button">
//                     Add Task
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default TaskForm;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import './TaskForm.css'; // Import the CSS file for styling

const TaskForm = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');
    const [priority, setPriority] = useState('Medium');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:4000/tasks',
                {
                    title,
                    description,
                    status,
                    priority,
                },
                {
                    headers: { Authorization: `Bearer ${user}` },
                }
            );
            navigate('/tasks'); // Navigate to the tasks page after successful submission
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="task-form-container">
            <h2 className="form-title">Create a New Task</h2>
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Task Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Task Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                        className="form-textarea"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="form-select"
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="form-select"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button type="submit" className="form-submit-button">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
