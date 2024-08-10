import React, { useEffect, useState } from 'react';
import { getExperiences } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Experience {
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  location: string;
  details: string;
}

const ExperienceList: React.FC = () => {
  const { language } = useLanguage();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences(language);
        setExperiences(data as Experience[]);
      } catch (error) {
        console.error('Error fetching experiences data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchExperiences();
  }, [language]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
