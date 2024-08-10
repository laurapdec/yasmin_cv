// src/components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getContactInfo } from '../services/firestoreService';

interface ContactInfoData {
  name: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
}


const NavBar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo(language); // Pass the language parameter
        setContactInfo(data as ContactInfoData);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo().catch((error) => console.error('Promise rejected in fetchContactInfo:', error));
  }, [language]);

  if (!contactInfo) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <img
        src={contactInfo.image}
        alt={contactInfo.name}
        className="h-20 w-20 rounded-full object-cover mr-10 ml-20 my-1"
      />
      <h1 className="text-2xl font-bold">{contactInfo.name}</h1>
      <div className="space-x-4 mr-20">
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
