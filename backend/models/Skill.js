const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String }, // URL or icon name
    category: { type: String, enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Other'], required: true },
    level: { type: Number, min: 1, max: 100 } // Percentage
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
