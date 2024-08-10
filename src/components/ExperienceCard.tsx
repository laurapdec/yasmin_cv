// src/components/ExperienceCard.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Experience {
  title: {
    en: string;
    fr: string;
    pt: string;
  };
  company: {
    en: string;
    fr: string;
    pt: string;
  };
  details: {
    en: string;
    fr: string;
    pt: string;
  };
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { language } = useLanguage();

  return (
    <div className="p-4 m-4 border rounded-lg shadow-lg hover:bg-gray-100 transition-all cursor-pointer">
      <h2 className="text-xl font-semibold">{experience.title[language]}</h2>
      <p className="text-gray-600">{experience.company[language]}</p>
      <p className="text-gray-800 mt-4">{experience.details[language]}</p>
    </div>
  );
};

export default ExperienceCard;
