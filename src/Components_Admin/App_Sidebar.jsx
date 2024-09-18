import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Profile from './Profile';
import Courses from './Courses';
import { useAuth } from '../AuthContext'; // Adjust path as needed

function App_Sidebar() {
  const { isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 lg:ml-60 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default App_Sidebar;
