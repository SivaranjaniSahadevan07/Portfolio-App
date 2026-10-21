import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
                <a className="logo" href="#home" onClick={closeMenu} aria-label="Sivaranjani home">
                    <span className="logo-text">Sivaranjani</span>
                    <span className="logo-dot">.</span>
                </a>
                <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li className="mobile-contact-link"><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#contact" className="btn-primary">Contact Me</a>
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
