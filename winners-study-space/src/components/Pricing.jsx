import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="pricing" class="section" style={{ backgroundColor: 'var(--bg-section)' }}>
            <div class="container">
                <h2 class="section-title">Flexible Pricing Plans</h2>
                <div class="pricing-grid">

                    <div class="pricing-card">
                        <h3 class="pricing-plan">Economy</h3>
                        <ul class="pricing-features">
                            <li>Dedicated Desk</li>
                            <li>Unlimited Wi-Fi</li>
                            <li>Comfortable Environment</li>
                            <li>Flexible Seating</li>
                            <li>Power Backup</li>
                        </ul>
                        <button class="btn btn-outline" style={{ width: '100%' }} onClick={scrollToContact}>Choose Economy</button>
                    </div>

                    <div class="pricing-card">
                        <h3 class="pricing-plan">Elite</h3>
                        <ul class="pricing-features">
                            <li>Air Conditioning</li>
                            <li>Dedicated Desk</li>
                            <li>Unlimited Wi-Fi</li>
                            <li>Comfortable Environment</li>
                            <li>Flexible Seating</li>
                            <li>Power Backup</li>
                        </ul>
                        <button class="btn btn-outline" style={{ width: '100%' }} onClick={scrollToContact}>Choose Elite</button>
                    </div>

                    <div class="pricing-card popular">
                        <div class="popular-badge">POPULAR</div>
                        <h3 class="pricing-plan">Premium</h3>
                        <ul class="pricing-features">
                            <li>Air Conditioning</li>
                            <li>Locker Facility</li>
                            <li>Dedicated Desk</li>
                            <li>Unlimited Wi-Fi</li>
                            <li>Comfortable Environment</li>
                            <li>Flexible Seating</li>
                            <li>Power Backup</li>
                        </ul>
                        <button class="btn btn-primary" style={{ width: '100%' }} onClick={scrollToContact}>Choose Premium</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
