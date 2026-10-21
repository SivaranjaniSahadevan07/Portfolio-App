import React from 'react';
import './Experience.css';

const experienceItems = [
    {
        category: 'Professional Experience',
        categoryClass: 'professional',
        title: 'Web Developer',
        organization: 'BeeLike',
        dates: 'June 2023 – July 2024',
        location: 'Madurai',
        details: [
            'Developed and maintained web application interfaces using HTML, CSS, JavaScript, and related frontend technologies.',
            'Built responsive user interfaces focused on usability and cross-device compatibility.',
            'Collaborated on development tasks, troubleshooting, and website improvements.'
        ]
    },
    {
        category: 'Independent Development & Learning',
        categoryClass: 'learning',
        title: 'MERN Stack Development',
        organization: 'Elysium Academy',
        dates: 'October 2024 – April 2025',
        location: 'Madurai',
        certificate: true,
        details: [
            'Built full-stack applications with MongoDB, Express.js, React.js, and Node.js.',
            'Practiced REST APIs, CRUD operations, authentication, and database integration.',
            'Applied Git, Redux, responsive UI development, and deployment in hands-on projects.'
        ]
    },
    {
        category: 'Professional Experience',
        categoryClass: 'professional',
        title: 'Technical Trainer',
        organization: 'CADD Centre',
        dates: 'March 2026 – October 2026',
        location: 'Madurai',
        details: [
            'Delivered technical training in web development and programming concepts.',
            'Demonstrated coding examples and guided learners through practical exercises.',
            'Conducted practical coding sessions and provided mini-project guidance.'
        ]
    }
];

const Experience = () => (
    <section id="experience" className="experience-section">
        <div className="container">
            <h2 className="section-title">Experience &amp; Learning</h2>
            <p className="experience-intro">
                Professional roles alongside focused full-stack training and hands-on development.
            </p>
            <ol className="experience-timeline">
                {experienceItems.map((item) => (
                    <li className="experience-item" key={`${item.organization}-${item.title}`}>
                        <article className="experience-entry">
                            <div className="experience-entry-heading">
                                <div>
                                    <span className={`experience-category ${item.categoryClass}`}>
                                        {item.category}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p className="experience-organization">{item.organization}</p>
                                </div>
                                <div className="experience-meta">
                                    <time>{item.dates}</time>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                            
                            <ul className="experience-details">
                                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                            </ul>
                        </article>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default Experience;