import React from 'react';
import '../styles/Amenities.css';
import { Wifi, Zap, Armchair, Wind, Droplets, ShieldCheck } from 'lucide-react';

const amenities = [
    {
        icon: <Wifi size={32} />,
        title: 'High-Speed Wi-Fi',
        desc: 'Seamless connectivity for uninterrupted study sessions.'
    },
    {
        icon: <Armchair size={32} />,
        title: 'Ergonomic Chairs',
        desc: 'Supportive seating designed for long hours of comfort.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Power Backup',
        desc: '24/7 power supply to ensure your focus never breaks.'
    },
    {
        icon: <Wind size={32} />,
        title: 'Air Conditioned',
        desc: 'Cool and quiet environment for maximum concentration.'
    },
    {
        icon: <Droplets size={32} />,
        title: 'RO Water',
        desc: 'Clean and safe drinking water available at all times.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Secure Environment',
        desc: 'CCTV surveillance and safe premises for your peace of mind.'
    }
];

const Amenities = () => {
    return (
        <section id="amenities" class="section">
            <div class="container">
                <h2 class="section-title">Premium Amenities</h2>
                <div class="amenities-grid">
                    {amenities.map((item, index) => (
                        <div key={index} class="amenity-card">
                            <div class="amenity-icon">
                                {item.icon}
                            </div>
                            <h3 class="amenity-title">{item.title}</h3>
                            <p class="amenity-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
