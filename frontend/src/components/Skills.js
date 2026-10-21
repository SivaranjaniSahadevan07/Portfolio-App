import React from 'react';
import {
    SiBootstrap,
    SiCss,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostman,
    SiReact,
    SiRedux,
    SiRender,
    SiVercel
} from 'react-icons/si';
import { FiCode, FiDatabase, FiLink, FiShield, FiSmartphone } from 'react-icons/fi';
import './Skills.css';

const skillIcons = {
    HTML5: { Icon: SiHtml5, color: '#e34f26' },
    CSS3: { Icon: SiCss, color: '#1572b6' },
    'JavaScript (ES6+)': { Icon: SiJavascript, color: '#f7df1e' },
    Bootstrap: { Icon: SiBootstrap, color: '#7952b3' },
    'React.js': { Icon: SiReact, color: '#61dafb' },
    'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
    'Express.js': { Icon: SiExpress, color: '#f8fafc' },
    'RESTful APIs': { Icon: FiCode, color: '#a5b4fc' },
    MongoDB: { Icon: SiMongodb, color: '#47a248' },
    MySQL: { Icon: SiMysql, color: '#4479a1' },
    SQL: { Icon: FiDatabase, color: '#a5b4fc' },
    Redux: { Icon: SiRedux, color: '#764abc' },
    Git: { Icon: SiGit, color: '#f05032' },
    GitHub: { Icon: SiGithub, color: '#f8fafc' },
    Postman: { Icon: SiPostman, color: '#ff6c37' },
    Vercel: { Icon: SiVercel, color: '#f8fafc' },
    Render: { Icon: SiRender, color: '#46e3b7' },
    'Responsive Design': { Icon: FiSmartphone, color: '#a5b4fc' },
    'JWT Authentication': { Icon: FiShield, color: '#f9a8d4' },
    'API Integration': { Icon: FiLink, color: '#6ee7b7' }
};

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
            <div className="skills-heading">
                <div>
                    <p className="skills-eyebrow">MY TOOLKIT</p>
                    <h2 className="section-title">Technical Skills</h2>
                </div>
                <p className="skills-intro">
                    Technologies and practices I use to build reliable, responsive web applications.
                </p>
            </div>
            <div className="skills-container">
                {skillGroups.map(({ category, skills }) => (
                    <section key={category} className="skill-category-group" aria-label={category}>
                        <h3>{category}</h3>
                        <ul className="skills-grid">
                            {skills.map((skill) => {
                                const { Icon, color } = skillIcons[skill];
                                return (
                                    <li key={skill} className="skill-item">
                                        <Icon className="skill-icon" style={{ color }} aria-hidden="true" />
                                        <span>{skill}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
