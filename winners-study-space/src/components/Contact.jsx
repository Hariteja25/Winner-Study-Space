import React from 'react';
import '../styles/Contact.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <section id="contact" class="section" style={{ background: 'var(--bg-section)' }}>
                <div class="container">
                    <h2 class="section-title">Visit Us Today</h2>
                    <div class="contact-wrapper">

                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="contact-icon"><MapPin size={20} /></div>
                                <div class="contact-text">
                                    <h4>Address</h4>
                                    <p>3rd Floor, LR Shine Building, Above IDBI Bank,<br />Beside Mahila Police Station, Trunk Road,<br />Nellore, Andhra Pradesh - 524001</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon"><Phone size={20} /></div>
                                <div class="contact-text">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919440642408">+91 94406 42408</a></p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon"><Mail size={20} /></div>
                                <div class="contact-text">
                                    <h4>Email</h4>
                                    <p><a href="mailto:winnersss2026@gmail.com">winnersss2026@gmail.com</a></p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon"><Clock size={20} /></div>
                                <div class="contact-text">
                                    <h4>Operating Hours</h4>
                                    <p>7:00 AM - 10:00 PM<br />Monday - Sunday</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact-map">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=Winners+Study+Space+Nellore+LR+Shine+Building&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                title="Winners Study Space Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            <footer class="footer">
                <p>&copy; {new Date().getFullYear()} Winners Study Space. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Contact;
