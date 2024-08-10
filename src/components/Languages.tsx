// src/components/Languages.tsx
import React, { useEffect, useState } from 'react';
import { getLanguages } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Language {
  language: string;
  name: string;
  proficiency: number;
}

const Languages: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await getLanguages(language); // Pass language here
        setLanguages(data as Language[]);
      } catch (error) {
        console.error('Error fetching languages data:', error);
      }
    };

    fetchLanguages().catch(error => console.error('Error in fetchLanguages:', error));
  }, [language]);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      <ul className="list-disc list-inside">
        {languages.map((language, index) => (
          <li key={index} className="text-gray-700">
            {language.name}: {language.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;