import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebaradmin = () => {
  return (
    <div className="bg-blue-100 w-full h-full">
      {/* Sidebar */}
      <nav className="bg-gray-900 w-full sm:w-60 shadow-lg h-screen rounded-r-3xl text-white fixed">
        <ul className="ml-10">
          <li className="flex items-center space-x-3 p-4">
            <img src="src/assets/L.png" alt="logo" className="w-22 h-16 rounded-full" />
          </li>
          
          <li>
            <Link to="/home" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>
          
          <li>
            <Link to="/profile" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
          
          <li>
            <Link to="/wallet" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-wallet"></i>
              <span>Wallet</span>
            </Link>
          </li>
          
          <li>
            <Link to="/analytics" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </Link>
          </li>
          
          <li>
            <Link to="/tasks" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-tasks"></i>
              <span>Tasks</span>
            </Link>
          </li>
          
          <li>
            <Link to="/settings" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </Link>
          </li>
          
          <li>
            <Link to="/help" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-question-circle"></i>
              <span>Help</span>
            </Link>
          </li>
          
          <li className="">
            <Link to="/logout" className="flex items-center space-x-4 p-4 hover:bg-gray-600">
              <i className="fas fa-sign-out-alt"></i>
              <span>Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebaradmin;
