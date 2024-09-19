import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebaradmin from "./Sidebaradmin";
import Home from "./Home";
import Profile from "./Profile"; // Exemples d'autres pages
import Analytics from "./Analytics"; // Exemples d'autres pages

const App_Admin = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebaradmin />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* Ajoute d'autres routes ici */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App_Admin;
