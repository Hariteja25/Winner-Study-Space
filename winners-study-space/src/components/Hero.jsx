import React from 'react';
import '../styles/Hero.css';

const Hero = () => {

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" class="hero">
            <div class="container hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        Achieve Your Goals in <br />
                        <span>Silence & Comfort</span>
                    </h1>
                    <p class="hero-subtitle">
                        Winners Study Space provides a premium, distraction-free environment
                        optimized for productivity.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary" onClick={scrollToContact}>Book a Desk Now</button>
                        <a href="#amenities" class="btn btn-outline" style={{ marginLeft: '10px' }}>Explore Amenities</a>
                    </div>
                </div>

                {/* Abstract visual representation or we could use an image placeholder */}
                <div class="hero-image-container">
                    <div class="hero-card">
                        {/* Using a placeholder or an amenity icon illustration could be nice */}
                        <div style={{
                            width: '100%',
                            height: '250px',
                            backgroundColor: 'var(--primary-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            color: 'var(--primary-dark)',
                            marginBottom: '1rem'
                        }}>
                            <span style={{ fontSize: '5rem' }}>📚</span>
                        </div>
                        <h3>Your Personal Growth Zone</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Ergonomic seating • High-speed WiFi • Air Conditioned</p>
                        <div class="hero-badge">Open 8AM - 10PM</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
