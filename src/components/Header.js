import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sm:p-6">
      <div className="container mx-auto">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
