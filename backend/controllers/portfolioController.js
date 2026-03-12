const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Message = require('../models/Message');

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all skills
exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Post a contact message
exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Admin: Add project (protected route in future)
exports.addProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Admin: Add skill
exports.addSkill = async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
