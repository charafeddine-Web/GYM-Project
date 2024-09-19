import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-600">Gérez vos compétences, suivez vos cours, et explorez de nouvelles opportunités de formation.</p>
      </section>

      {/* Statistics Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Cours en cours</h3>
          <p className="text-2xl font-semibold text-blue-600">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Compétences maîtrisées</h3>
          <p className="text-2xl font-semibold text-green-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Nouveaux cours disponibles</h3>
          <p className="text-2xl font-semibold text-red-600">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Projets complétés</h3>
          <p className="text-2xl font-semibold text-purple-600">7</p>
        </div>
      </section>

      {/* Quick Access to Features */}
      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Accès rapide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-graduation-cap text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">Mes cours</h3>
            <p className="text-gray-600">Consultez et gérez vos cours en cours.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
              Accéder
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-lightbulb text-4xl text-green-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">Nouvelles compétences</h3>
            <p className="text-gray-600">Explorez de nouvelles compétences à apprendre.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500">
              Explorer
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-cogs text-4xl text-red-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">Paramètres</h3>
            <p className="text-gray-600">Personnalisez votre tableau de bord.</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500">
              Paramètres
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
