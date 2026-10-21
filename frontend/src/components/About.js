import React from 'react';
import './About.css';

const About = () => (
    <section id="about" className="about-section">
        <div className="container about-content">
            <div className="about-heading">
                <p className="about-eyebrow">A LITTLE ABOUT ME</p>
                <h2 className="section-title">Building with purpose.</h2>
            </div>
            <p className="about-copy">
                I'm a web developer focused on creating responsive, useful applications.
                From building MERN stack projects to guiding learners as a technical trainer,
                I enjoy turning ideas into clear, reliable digital experiences.
            </p>
        </div>
    </section>
);

export default About;
