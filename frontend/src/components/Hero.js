import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content animate-up">
                    <h2 className="hero-greeting">Hi, I'm</h2>
                    <h1 className="hero-name">MERN Stack <br /> <span>Developer</span></h1>
                    <p className="hero-desc">
                        I build responsive web applications and REST APIs with React, Node.js, Express, and MongoDB. Focused on clean code, practical problem-solving, and building useful products.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-main">View Projects</a>
                        <a href="/resume.pdf" download="Sivaranjani-MERN-Developer-Resume.pdf" className="btn-outline">
                            <span className="download-icon" aria-hidden="true">&#8595;</span>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="hero-visual animate-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-portrait-frame">
                        <img
                            className="hero-portrait"
                            src="/portrait.png"
                            alt="Portrait of Sivaranjani Sahadevan"
                        />
                    </div>
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
