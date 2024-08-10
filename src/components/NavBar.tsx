// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle language change here
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="text-xl font-bold">My CV</div>
      <select
        onChange={changeLanguage}
        className="bg-gray-700 text-white p-2 rounded"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
      </select>
    </nav>
  );
};

export default Navbar;
