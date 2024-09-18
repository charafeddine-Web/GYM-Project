import React, { useState } from 'react';

const Home = () => {
  const [upcomingSession, setUpcomingSession] = useState({
    title: 'Yoga for Beginners',
    date: '2024-09-20',
    time: '10:00 AM',
    coach: 'Coach Sarah',
  });
  
  const [completedSessions, setCompletedSessions] = useState([
    { id: 1, title: 'HIIT Workout', date: '2024-09-15', feedback: 'Great job, keep pushing!' },
    { id: 2, title: 'Strength Training', date: '2024-09-12', feedback: 'Good progress on form.' },
  ]);

  const [progress, setProgress] = useState({
    weightLoss: 3, // kg lost
    sessionsCompleted: 10,
  });

  const [messages, setMessages] = useState([
    { id: 1, from: 'Coach Sarah', content: 'Don’t forget to hydrate!' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Bienvenue, Client Name!</h1>
            <p className="text-gray-600">Prêt pour une autre session de remise en forme?</p>
          </div>
          <div className="bg-teal-500 p-6 rounded-full flex items-center justify-center mt-4 lg:mt-0">
            <span className="text-4xl font-bold text-white">👋</span>
          </div>
        </div>
        
        {/* Upcoming Session */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Prochaine Session</h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <div className="flex-1 bg-teal-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-600">{upcomingSession.title}</h3>
              <p className="text-gray-600">
                {upcomingSession.date} à {upcomingSession.time} avec {upcomingSession.coach}
              </p>
            </div>
            <div className="bg-teal-500 text-white p-6 rounded-full flex items-center justify-center mt-4 lg:mt-0">
              <span className="text-4xl">📅</span>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Votre Progrès</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-teal-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl font-bold text-teal-600">{progress.weightLoss} kg</p>
              <p className="text-gray-600">Perte de poids</p>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl font-bold text-teal-600">{progress.sessionsCompleted}</p>
              <p className="text-gray-600">Sessions Complétées</p>
            </div>
          </div>
        </div>

        {/* Completed Sessions */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sessions Précédentes</h2>
          <ul className="space-y-4">
            {completedSessions.map((session) => (
              <li key={session.id} className="border-t border-gray-200 p-6 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-teal-600">{session.title}</h3>
                <p className="text-gray-500">{session.date}</p>
                <p className="text-gray-700 mt-2">Feedback: {session.feedback}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Messages */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Messages du Coach</h2>
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message.id} className="border-t border-gray-200 p-6 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors">
                <p className="font-bold text-teal-600">{message.from}</p>
                <p className="text-gray-700 mt-2">{message.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
