import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import './Contact.css';

const Contact = () => (
    <section id="contact" className="contact-section">
        <div className="container">
            <div className="contact-layout">
                <div className="contact-copy">
                    <p className="contact-eyebrow">Get in touch</p>
                    <h2>Let's build something <span>useful.</span></h2>
                    <p className="contact-lead">
                        For roles, collaborations, or project inquiries, reach out directly by email.
                    </p>
                    <a className="contact-email" href="mailto:sivaranjanisahadevan@gmail.com">
                        <FiMail className="contact-icon contact-icon-email" aria-hidden="true" />
                        <span>sivaranjanisahadevan@gmail.com</span>
                        <span className="contact-email-icon" aria-hidden="true">&#8599;</span>
                    </a>
                </div>
                <dl className="contact-details">
                    <div className="contact-detail">
                        <dt className="contact-label-whatsapp">
                            <SiWhatsapp className="contact-icon" aria-hidden="true" />
                            WhatsApp
                        </dt>
                        <dd>
                            <a href="wa.me/916381983074" target="_blank" rel="noopener noreferrer">Send a message</a>
                        </dd>
                    </div>
                    <div className="contact-detail">
                        <dt className="contact-label-location">
                            <FiMapPin className="contact-icon" aria-hidden="true" />
                            Location
                        </dt>
                        <dd className="contact-location">Sivagangai, India</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
);

export default Contact;
