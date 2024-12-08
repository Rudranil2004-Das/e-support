import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    Welcome to our Book Search platform, designed to offer a simple and efficient way to explore and discover books. 
                    Our mission is to create a user-friendly experience that makes finding your next read both easy and enjoyable.
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Neelashree Dey</h3>
                        <p>Project Strategist</p>
                    </div>
                    <div className="team-member">
                        <h3>Shreya Adhikary</h3>
                        <p>Content Writer</p>
                    </div>
                    <div className="team-member">
                        <h3>Debapriya Ghosh</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-member">
                        <h3>Mahua Chowdhury</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Rudranil Das</h3>
                        <p>Frontend Developer</p>
                        <p>Contact: +91 74390 88691</p>
                    </div>
                    <div className="team-member">
                        <h3>Soumoditya Pramanik</h3>
                        <p>Quality Analyst</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
