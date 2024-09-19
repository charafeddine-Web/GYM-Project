import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
// SignIn.js

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        login();

        navigate('/dashboard');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            
            {/* Background Video */}
            <video
                src="src/assets/bg.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay to darken the background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Login Form */}
            <div className="relative z-10 flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
                
                {/* Left Side: Image */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('src/assets/login.jpeg')` }}>
                    {/* Optional: Add some content or styling here */}
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Login to Your Account</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-teal-500 font-bold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
