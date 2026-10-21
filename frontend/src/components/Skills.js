import React from 'react';
import './Skills.css';

const skillGroups = [
    {
        category: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'React.js']
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
        category: 'Databases',
        skills: ['MongoDB', 'MySQL', 'SQL']
    },
    {
        category: 'State Management',
        skills: ['Redux']
    },
    {
        category: 'Tools & Deployment',
        skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render']
    },
    {
        category: 'Core Competencies',
        skills: ['Responsive Design', 'JWT Authentication', 'API Integration']
    }
];

const Skills = () => (
    <section id="skills" className="skills-section">
        <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <p className="skills-intro">
                Technologies and practices I use to build reliable, responsive web applications.
            </p>
            <div className="skills-container">
                {skillGroups.map(({ category, skills }) => (
                    <section key={category} className="skill-category-group" aria-label={category}>
                        <h3>{category}</h3>
                        <ul className="skills-grid">
                            {skills.map((skill) => (
                                <li key={skill} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
