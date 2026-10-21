import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Training & Placement Platform',
        organization: 'The Nexify',
        description: 'A career-focused platform for IT courses, learning pathways, and placement support.',
        technologies: [],
        links: [
            { label: 'Live site', url: 'https://edtech.thenexify.in/' }
        ]
    },
    {
        title: 'Blog Platform',
        description: 'Full-stack publishing with role-based access, JWT authentication, search, filters, and comments.',
        technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
        links: [
            { label: 'GitHub', url: 'https://github.com/SivaranjaniSahadevan07/Blog' },
            { label: 'Live site', url: 'https://blog-frontend-woad-alpha.vercel.app/' }
        ]
    },
    {
        title: 'Todo App',
        description: 'A focused task manager for organizing projects and daily activities.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: [
            { label: 'GitHub', url: 'https://github.com/SivaranjaniSahadevan07/Todo_App' },
            { label: 'Live site', url: 'https://frontend-nine-virid-46.vercel.app/' }
        ]
    },
    {
        title: 'Portfolio Showcase',
        organization: 'EsselenTech Solutions',
        status: 'In progress',
        description: 'Responsive portfolio platform with a Pinterest-style masonry grid and admin dashboard.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
        links: [
            { label: 'Live site', url: 'https://esselentech.vercel.app/' }
        ]
    },
    {
        title: 'Notes Sharing Platform',
        status: 'In progress',
        description: 'MERN platform for students to upload and find study materials, with authentication, search, categories, and file uploads.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        links: []
    }
];

const Projects = () => (
    <section id="projects" className="projects-section">
        <div className="container">
            <h2 className="section-title">Selected Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-heading">
                            <span className="project-number">0{index + 1}</span>
                            {project.status && <span className="project-status">{project.status}</span>}
                        </div>
                        {project.organization && <p className="project-organization">{project.organization}</p>}
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.technologies.length > 0 && (
                            <ul className="project-tech" aria-label="Technologies">
                                {project.technologies.map((technology) => (
                                    <li className="tech-badge" key={technology}>{technology}</li>
                                ))}
                            </ul>
                        )}
                        {project.links.length > 0 && (
                            <div className="project-links">
                                {project.links.map(({ label, url }) => (
                                    <a href={url} key={label} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">&#8599;</span></a>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
