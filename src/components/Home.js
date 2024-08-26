import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-base sm:text-xl mb-8">Explore my projects, skills, and experience.</p>
        <img src="https://cdn.pixabay.com/photo/2020/10/03/21/13/bike-5624647_640.jpg" alt="Portfolio" className="w-full sm:w-1/2 mx-auto rounded shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
