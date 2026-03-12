const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Login user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Refresh token
exports.refreshToken = (req, res) => {
    // Token refresh logic here
    res.status(200).json({ message: 'Token refreshed' });
}

// Logout user
exports.logout = (req, res) => {
    // Logout logic here
    res.status(200).json({ message: 'Logged out successfully' });
}