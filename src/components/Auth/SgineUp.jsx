import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../AuthContext'; // Import your Auth context

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form (e.g., password match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Registration logic should go here (API call, etc.)
    console.log("Registering:", { fullname, email, password });

    // After registration success, log the user in and navigate to dashboard
    login(); // This will set `isAuthenticated` in context
    navigate('/dashboard'); // Navigate to dashboard
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      
      {/* Background Video */}
      <video
        src="src/assets/bg2.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Registration Form */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
        
        {/* Left Side: Image or Placeholder */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('src/assets/register.jpeg')` }}>
          {/* Optional: Add some content or styling here */}
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Create an Account</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500">
              <FaUser className="text-gray-500 p-3" />
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name"
                className="w-full p-3 border-0 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500">
              <FaEnvelope className="text-gray-500 p-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full p-3 border-0 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500">
              <FaLock className="text-gray-500 p-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border-0 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500">
              <FaLock className="text-gray-500 p-3" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-3 border-0 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-teal-500 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
