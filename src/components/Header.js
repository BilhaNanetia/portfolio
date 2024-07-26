import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bilha Leposo</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
