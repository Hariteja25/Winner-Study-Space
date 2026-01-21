import React from 'react';
import '../styles/Gallery.css';

const images = [
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', caption: 'Quiet Study Zones' },
    { url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=80', caption: 'Modern Interiors' },
    { url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80', caption: 'Individual Desks' },
    { url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80', caption: 'Co-working Vibes' },
    { url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80', caption: 'Comfortable Seating' },
    { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80', caption: 'Inspirational Atmosphere' }
];

const Gallery = () => {
    return (
        <section id="gallery" class="section">
            <div class="container">
                <h2 class="section-title">Experience the Silence</h2>
                <div class="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} class="gallery-item">
                            <img src={image.url} alt={image.caption} loading="lazy" />
                            <div class="gallery-overlay">
                                <span class="gallery-caption">{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
