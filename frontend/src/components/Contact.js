import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post('http://localhost:8000/api/portfolio/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info animate-up">
                        <h3>Let's talk about everything!</h3>
                        <p>Don't like forms? Send me an email. 👋</p>
                        <div className="info-item">
                            <span className="icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>sivaranjanisahadevan@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Location</h4>
                                <p>Sivagangai, India.</p>
                            </div>
                        </div>
                    </div>
                    // <form className="contact-form glass-card animate-up" onSubmit={handleSubmit}>
                    //     <div className="form-group">
                    //         <input
                    //             type="text"
                    //             name="name"
                    //             placeholder="Your Name"
                    //             value={formData.name}
                    //             onChange={handleChange}
                    //             required
                    //         />
                    //     </div>
                    //     <div className="form-group">
                    //         <input
                    //             type="email"
                    //             name="email"
                    //             placeholder="Email Address"
                    //             value={formData.email}
                    //             onChange={handleChange}
                    //             required
                    //         />
                    //     </div>
                    //     <div className="form-group">
                    //         <input
                    //             type="text"
                    //             name="subject"
                    //             placeholder="Subject"
                    //             value={formData.subject}
                    //             onChange={handleChange}
                    //             required
                    //         />
                    //     </div>
                    //     <div className="form-group">
                    //         <textarea
                    //             name="message"
                    //             placeholder="Your Message"
                    //             rows="5"
                    //             value={formData.message}
                    //             onChange={handleChange}
                    //             required
                    //         ></textarea>
                    //     </div>
                    //     <button type="submit" className="btn-main">Send Message</button>
                    //     {status && <p className="status-msg">{status}</p>}
                    // </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
