const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    technologies: [{ type: String }],
    githubLink: { type: String },
    liveLink: { type: String },
    category: { type: String, enum: ['Frontend', 'Backend', 'Full Stack', 'Other'], default: 'Full Stack' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
