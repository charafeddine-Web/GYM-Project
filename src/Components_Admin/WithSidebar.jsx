// WithSidebar.jsx
import React from 'react';
import App_Sidebar from './App_Sidebar'; // Assurez-vous que le chemin est correct

const WithSidebar = ({ component }) => {
  return (
    <div className="flex">
      <App_Sidebar />
      <div className="flex-1 lg:ml-64 p-8">
        {component}
      </div>
    </div>
  );
};

export default WithSidebar;
