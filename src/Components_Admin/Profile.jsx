import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate developer who loves coding and exploring new technologies.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-8">
        <div className="relative">
          <img 
            src="https://via.placeholder.com/96" 
            alt="Profile Avatar" 
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover" 
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656-5.656m11.314 0a4 4 0 00-5.656 5.656m0 0a4 4 0 01-5.656 5.656m0-11.314a4 4 0 00-5.656 5.656m5.656 0h-5.656a4 4 0 010-5.656h5.656a4 4 0 015.656 5.656m0 0h-5.656m5.656 0a4 4 0 000-5.656m-5.656 5.656h-5.656m11.314-11.314a4 4 0 00-5.656 5.656" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-1 text-gray-800">{user.fullName}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
