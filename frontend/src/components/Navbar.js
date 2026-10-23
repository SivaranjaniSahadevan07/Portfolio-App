import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleRef = useRef(null);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
                menuToggleRef.current?.focus();
            }
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [menuOpen]);

    const navigateToSection = (event) => {
        const href = event.currentTarget.getAttribute('href');
        const target = href ? document.querySelector(href) : null;

        if (!target) {
            setMenuOpen(false);
            return;
        }

        event.preventDefault();
        if (window.location.hash !== href) {
            window.history.pushState(null, '', href);
        }

        scrollToSection(target);
        setMenuOpen(false);
    };

    const scrollToSection = (target) => {
        const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0;
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - navbarHeight);
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

        window.scrollTo({
            top,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    };

    useEffect(() => {
        const handleHistoryNavigation = () => {
            const target = document.getElementById(window.location.hash.slice(1));
            if (!target) return;

            scrollToSection(target);
        };

        window.addEventListener('popstate', handleHistoryNavigation);
        return () => window.removeEventListener('popstate', handleHistoryNavigation);
    }, []);

    return (
        <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
                <a className="logo" href="#home" onClick={navigateToSection} aria-label="Sivaranjani home">
                    <span className="logo-text">Sivaranjani</span>
                    <span className="logo-dot">.</span>
                </a>
                <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                    <li><a href="#home" onClick={navigateToSection}>Home</a></li>
                    <li><a href="#about" onClick={navigateToSection}>About</a></li>
                    <li><a href="#skills" onClick={navigateToSection}>Skills</a></li>
                    <li><a href="#projects" onClick={navigateToSection}>Projects</a></li>
                    <li><a href="#experience" onClick={navigateToSection}>Experience</a></li>
                    <li className="mobile-contact-link"><a href="#contact" onClick={navigateToSection}>Contact</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#contact" className="btn-primary" onClick={navigateToSection}>Contact Me</a>
                </div>
                <button
                    ref={menuToggleRef}
                    className="nav-toggle"
                    type="button"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
