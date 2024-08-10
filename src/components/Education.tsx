import React, { useEffect, useState } from 'react';
import { getEducation } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description: string;
}

const Education: React.FC = () => {
  const { language } = useLanguage();
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const data = await getEducation(language);
        setEducation(data as Education[]);
      } catch (error) {
        console.error('Error fetching education data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchEducation();
  }, [language]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{edu.degree} at {edu.institution}</h3>
          <p className="text-gray-600">{edu.startYear} - {edu.endYear}</p>
          <p className="text-gray-700">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
