const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
require('dotenv').config();

const projects = [
    // {
    //     title: 'E-Commerce Platform',
    //     description: 'A full-feature e-commerce platform with payment integration and admin dashboard.',
    //     technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    //     githubLink: 'https://github.com/example/ecommerce',
    //     liveLink: 'https://example-ecommerce.com',
    //     category: 'Full Stack'
    // },
    // {
    //     title: 'Weather Dashboard',
    //     description: 'A responsive weather dashboard that provides real-time weather information and forecasts.',
    //     technologies: ['React', 'OpenWeather API', 'CSS'],
    //     githubLink: 'https://github.com/example/weather-app',
    //     liveLink: 'https://example-weather.com',
    //     category: 'Frontend'
    // },
    {
        title: 'Portfolio Showcase Platform (In Progress) for EsselenTech solutions',
        description: 'Developed a full-stack responsive portfolio platform with a modern Pinterest-style masonry grid layout and admin dashboard',
        technologies: ['Next.js', 'React.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
        githubLink: 'https://github.com/SivaranjaniSahadevan07/Esselentech',
        liveLink: 'https://esselentech.vercel.app/',
        category: 'Full Stack'
    },
    {
        title: 'Blog APP',
        description: 'web-based platform designed for creating, publishing, managing, and consuming articles.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/SivaranjaniSahadevan07/Blog',
        liveLink: 'https://blog-frontend-woad-alpha.vercel.app/',
        category: 'Full Stack'
    },
    {
        title: 'Todo App',
        description: 'Designed to help users organize, prioritize, and track tasks, projects, and daily activities.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/SivaranjaniSahadevan07/Todo_App',
        liveLink: 'https://frontend-nine-virid-46.vercel.app/',
        category: 'Full Stack'
    }
];

const skills = [
    { name: 'JavaScript', category: 'Frontend', level: 90 },
    { name: 'React.js', category: 'Frontend', level: 85 },
    { name: 'Redux', category: 'Frontend', level: 85 },
    { name: 'Node.js', category: 'Backend', level: 80 },
    { name: 'Express.js', category: 'Backend', level: 80 },
    { name: 'MongoDB', category: 'Database', level: 75 },
    { name: 'Mongoose', category: 'Database', level: 75 },
    { name: 'HTML5/CSS3', category: 'Frontend', level: 95 },
    { name: 'Git', category: 'Tools', level: 85 }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');

        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log('Projects seeded');

        await Skill.deleteMany({});
        await Skill.insertMany(skills);
        console.log('Skills seeded');

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDB();
