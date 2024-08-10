import React, { useEffect, useState } from 'react';
import { getExperiences } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Experience {
  company: string;
  location: string;
  startYear: number;
  endYear: number;
  title: string;
  details: string;
}

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences(language);
        setExperiences(data as Experience[]);  // Ensure the type matches Experience[]
      } catch (error) {
        console.error('Error fetching experiences data:', error);
      }
    };

    fetchExperiences().catch((error) => console.error('Promise rejected in fetchExperiences:', error));
  }, [language]);


  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{exp.title} at {exp.company}</h3>
          <p className="text-gray-600">{exp.startYear} - {exp.endYear} | {exp.location}</p>
          <p className="text-gray-700">{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
