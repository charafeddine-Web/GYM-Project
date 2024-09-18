import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaEnvelope
} from 'react-icons/fa'; // Icons from react-icons

function Footer() {
    return (
        <footer className="bg-gray-700 text-white  mt-20">
            <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
                    <a href="#home" className="text-gray-400 hover:text-indigo-400 transition">Home</a>
                    <a href="#about" className="text-gray-400 hover:text-indigo-400 transition">About Us</a>
                    <a href="#services-packs" className="text-gray-400 hover:text-indigo-400 transition">Services & Packs</a>
                    <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition">Contact Us</a>
                </div>

                {/* Logo */}
                <div className="mb-4 md:mb-0">
                    <img src="/src/assets/L.png" alt="Logo" className="h-14 mx-auto" />
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com" className="text-gray-400 hover:text-indigo-400 transition">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:example@gmail.com" className="text-gray-400 hover:text-indigo-400 transition">
                        <FaEnvelope size={30} />
                    </a>
                    <a href="https://www.facebook.com" className="text-gray-400 hover:text-indigo-400 transition">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com" className="text-gray-400 hover:text-indigo-400 transition">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-4 text-xs text-gray-400">
                &copy; 2024 My Website. Designed by Tbibzat Charaf Eddine. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
