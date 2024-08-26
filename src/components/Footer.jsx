import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaEnvelope
} from 'react-icons/fa'; // Icons from react-icons

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <div className="mb-4 md:mb-0">
                    <nav className="space-x-4">
                        <a href="#home" className="hover:text-indigo-500">Home</a>
                        <a href="#about" className="hover:text-indigo-500">About Us</a>
                        <a href="#services-packs" className="hover:text-indigo-500">Services & Packs</a>
                        <a href="#contact" className="hover:text-indigo-500">Contact Us</a>
                    </nav>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com" className="hover:text-indigo-500">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:example@gmail.com" className="hover:text-indigo-500">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://www.facebook.com" className="hover:text-indigo-500">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-indigo-500">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-4">
                &copy; 2022 My Website. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
