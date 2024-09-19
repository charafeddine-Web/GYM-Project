import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust path as needed
import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate('/signin'); // Redirect to sign-in page
  };

  return (
    <div className="flex h-screen fixed">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-50 bg-gradient-to-br rounded-r-3xl from-teal-500 to-teal-900 p-6 pt-8 shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative`}
      >
        <button
          className="absolute top-0 right-[-40px] lg:hidden bg-teal-700 p-2 rounded-full"
          onClick={toggleSidebar}
        >
          <FaBars size={24} className="text-white" />
        </button>

        <div className="flex items-center space-x-2 mb-12">
          <div className="bg-teal-600 p-2 rounded-full">
            <FaHome size={24} className="text-yellow-300" />
          </div>
          <h1 className="text-2xl font-bold text-white">Performance</h1>
        </div>

        <ul className="space-y-6">
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-x-4 p-3 hover:bg-teal-700 rounded-md cursor-pointer transition-all duration-200 ease-in-out"
            >
              <FaHome size={24} />
              <span className="text-white">Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/courses"
              className="flex items-center gap-x-4 p-3 hover:bg-teal-700 rounded-md cursor-pointer transition-all duration-200 ease-in-out"
            >
              <FaCog size={24} />
              <span className="text-white">Courses</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-x-4 p-3 hover:bg-teal-700 rounded-md cursor-pointer transition-all duration-200 ease-in-out"
            >
              <FaUser size={24} />
              <span className="text-white">Profil</span>
            </NavLink>
          </li>

          <li
            onClick={handleLogout}
            className="flex items-center gap-x-4 p-3 hover:bg-teal-700 rounded-md cursor-pointer transition-all duration-200 ease-in-out"
          >
            <FaSignOutAlt size={24} />
            <span className="text-white">Déconnexion</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
