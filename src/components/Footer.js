import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-col">
                    <div className="footer-contact">
                        <div>
                            <h3>Liana Technologies</h3>
                            <p><strong>Sales and inquiries</strong></p>
                            <p>Email: sales@lianatech.com</p>
                            <p>Phone: +358 10 387 7053</p>
                        </div>
                        <button>Contact us</button>
                    </div>
                </div>
                <div className="footer-col">
                    <div className="footer-links">
                        <a href="/">Company</a>
                        <a href="/">Products</a>
                        <a href="/">Contact us</a>
                        <a href="/">News</a>
                        <a href="/">Intranet</a>
                    </div>
                    <div className="footer-icons">
                        <a href="/"><FaFacebookF style={{color: 'white'}}/></a>
                        <a href="/"><FaTwitter style={{ color: 'white' }}/></a>
                        <a href="/"><FaLinkedinIn style={{ color: 'white' }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
