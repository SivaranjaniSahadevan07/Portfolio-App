import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content animate-up">
                    <h2 className="hero-greeting">Hi, I'm</h2>
                    <h1 className="hero-name">Full Stack <br /> <span>Developer</span></h1>
                    <p className="hero-desc">
                        A passionate fresher building modern, scalable, and user-centric web applications
                        using the MERN stack. Turning complex problems into elegant digital solutions.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-main">View Projects</a>
                        <a href="#contact" className="btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual animate-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-blob"></div>
                    <div className="hero-code-card glass-card">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-body">
                            <code>
                                <span className="keyword">const</span> <span className="variable">developer</span> = &#123; <br />
                                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Sivaranjani Sahadevan'</span>, <br />
                                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">'Full Stack'</span>, <br />
                                &nbsp;&nbsp;<span className="property">status</span>: <span className="string">'Ready to Work'</span> <br />
                                &#125;;
                            </code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
