const Task = require('../models/Task');

// Get User's Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create Task
exports.createTask = async (req, res) => {
    const { title, description, status, priority, dueDate } = req.body;

    try {
        const newTask = new Task({ title, description, status, priority, dueDate, user: req.user.id });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (!task || task.user.toString() !== req.user.id) return res.status(404).json({ message: 'Task not found' });

        Object.assign(task, req.body);
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (!task || task.user.toString() !== req.user.id) return res.status(404).json({ message: 'Task not found' });

        await task.remove();
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};