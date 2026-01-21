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
                        <h3 class="pricing-plan">Daily Pass</h3>
                        <div class="pricing-price">₹100 <span>/ day</span></div>
                        <ul class="pricing-features">
                            <li>Access for one full day</li>
                            <li>High-speed Wi-Fi</li>
                            <li>Shared Desk</li>
                            <li>RO Water Access</li>
                        </ul>
                        <button class="btn btn-outline" style={{ width: '100%' }} onClick={scrollToContact}>Choose Daily</button>
                    </div>

                    <div class="pricing-card popular">
                        <div class="popular-badge">POPULAR</div>
                        <h3 class="pricing-plan">Monthly Pro</h3>
                        <div class="pricing-price">₹2500 <span>/ month</span></div>
                        <ul class="pricing-features">
                            <li>Dedicated Desk</li>
                            <li>Unlimited Wi-Fi</li>
                            <li>Locker Facility</li>
                            <li>Power Backup</li>
                            <li>Air Conditioning</li>
                        </ul>
                        <button class="btn btn-primary" style={{ width: '100%' }} onClick={scrollToContact}>Choose Monthly</button>
                    </div>

                    <div class="pricing-card">
                        <h3 class="pricing-plan">Weekly Pass</h3>
                        <div class="pricing-price">₹600 <span>/ week</span></div>
                        <ul class="pricing-features">
                            <li>7 Days Access</li>
                            <li>High-speed Wi-Fi</li>
                            <li>Flexible Seating</li>
                            <li>Comfortable Enviroment</li>
                        </ul>
                        <button class="btn btn-outline" style={{ width: '100%' }} onClick={scrollToContact}>Choose Weekly</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
