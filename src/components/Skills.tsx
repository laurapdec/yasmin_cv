import React, { useEffect, useState } from 'react';
import { getSkills } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
  name: string;
  proficiency: number;
  language: string;
}

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills(language);
        setSkills(data as Skill[]);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchSkills();
  }, [language]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700">
            {skill.name}: {skill.proficiency}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
