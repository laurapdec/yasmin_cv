// src/components/NavBar.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const NavBar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My CV</div>
      <div className="space-x-4">
        <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'font-bold' : ''}>
          English
        </button>
        <button onClick={() => handleLanguageChange('pt')} className={language === 'pt' ? 'font-bold' : ''}>
          Português
        </button>
        <button onClick={() => handleLanguageChange('fr')} className={language === 'fr' ? 'font-bold' : ''}>
          Français
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
