import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
        {/* <!-- Logo and Mission Statement --> */}
        <div className="footer-about">
            <img src="your-logo.png" alt="eGovConnect Logo" className="footer-logo"/>
            <p className="mission">Connecting you to essential government services with ease and security.</p>
        </div>

        {/* <!-- Quick Links --> */}
        <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/services">Our Services</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        {/* <!-- Contact Information --> */}
        <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@egovconnect.com">support@egovconnect.com</a></p>
            <p>Phone: +123 456 7890</p>
            <p>Location: 123 Government St., City, Country</p>
        </div>

        {/* <!-- Social Media Links --> */}
        <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
                <a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><img src="facebook.png" alt="Facebook"/></a>
                <a href="https://twitter.com" target='_blank' rel="noopener noreferrer"><img src="twitter.png" alt="Twitter"/></a>
                <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer"><img src="linkedin.png" alt="LinkedIn"/></a>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 eGovConnect. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer