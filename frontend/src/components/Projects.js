import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('https://portfolio-app-czol.onrender.com/api/portfolio/projects');
                setProjects(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects", error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className="loading">Loading Projects...</div>;

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project._id} className="project-card glass-card">
                            <div className="project-image" style={{ backgroundColor: '#2e3a4e' }}>
                                {/* Fallback if no image */}
                                {!project.image && <div className="no-img">Project Preview</div>}
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                                    <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
