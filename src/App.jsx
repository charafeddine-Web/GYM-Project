import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './components/Auth/SginIn';
import SignUp from './components/Auth/SgineUp';
import Header from './components/Header';
import Services from './components/Services';
import Packes from './components/Packes';
import Client from './components/Client';
import About from './components/About';
import Comment from './components/Comment';
import App_Sidebar from './Components_Admin/App_Sidebar';
import { AuthProvider, useAuth } from './AuthContext'; 

// PrivateRoute component for protected routes
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/signin" replace />; // Use Navigate to redirect
};

function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Header />} />
            <Route path="services" element={<Services />} />
            <Route path="packes" element={<Packes />} />
            <Route path="client" element={<Client />} />
            <Route path="about" element={<About />} />
            <Route path="comment" element={<Comment />} />
          </Route>
          
          {/* Authentication Routes */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <App_Sidebar />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
