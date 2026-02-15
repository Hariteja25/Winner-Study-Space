import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';

const images = [
    { url: img1, caption: 'Quiet Study Zones' },
    { url: img2, caption: 'Modern Interiors' },
    { url: img3, caption: 'Individual Desks' },
    { url: img4, caption: 'Co-working Vibes' },
    { url: img5, caption: 'Comfortable Seating' },
    { url: img6, caption: 'Inspirational Atmosphere' }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="gallery" className="gallery-video-section">
            <div className="container">
                <div className="section-header fade-up">
                    <h2 className="section-title">Experience the Silence</h2>
                </div>

                <div className="gallery-video-player-container fade-up">
                    <div className="gallery-main-viewport">
                        <div className="gallery-vignette"></div>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`gallery-video-slide ${index === currentIndex ? 'active' : ''}`}
                            >
                                <img src={image.url} alt={image.caption} className="ken-burns-img" />
                                <div className="gallery-bottom-caption">
                                    <p>{image.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-video-nav">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
