import React from 'react';
import '../styles/Hero.css';
import bannerImg from '../images/winner_space_banner.jpeg';

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

                <div class="hero-image-container">
                    <div class="hero-card">
                        <div class="hero-banner-frame">
                            <img
                                src={bannerImg}
                                alt="Winners Study Space Banner"
                                className="hero-banner-img"
                            />
                        </div>
                        <div class="hero-card-content">
                            <h3>Your Personal Growth Zone</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Ergonomic seating • High-speed WiFi • Air Conditioned</p>
                            <div class="hero-badge">Open 7:00 AM - 10:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
