import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/portfolio/skills');
                setSkills(res.data);
            } catch (error) {
                console.error("Error fetching skills", error);
            }
        };
        fetchSkills();
    }, []);

    const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                    {categories.map(cat => (
                        <div key={cat} className="skill-category-group">
                            <h3>{cat}</h3>
                            <div className="skills-grid">
                                {skills.filter(s => s.category === cat).map(skill => (
                                    <div key={skill._id} className="skill-item glass-card">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <div
                                                className="skill-bar-fill"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
