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
  extended_details?: string; // Optional field for extended description
}

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Track expanded experience
  const { language } = useLanguage();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences(language);
        setExperiences(data as Experience[]); // Ensure the type matches Experience[]
      } catch (error) {
        console.error('Error fetching experiences data:', error);
      }
    };

    fetchExperiences().catch((error) => console.error('Promise rejected in fetchExperiences:', error));
  }, [language]);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{exp.title} at {exp.company}</h3>
          <p className="text-gray-600">{exp.startYear} - {exp.endYear} | {exp.location}</p>
          <p className="text-gray-700">{exp.details}</p>

          {exp.extended_details && (
            <>
              {expandedIndex === index && (
                <p className="text-gray-700 mt-2">{exp.extended_details}</p>
              )}
              <button
                className="text-blue-500 hover:text-blue-700 mt-2"
                onClick={() => toggleDetails(index)}
              >
                {expandedIndex === index ? 'Show less' : 'More details'}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
