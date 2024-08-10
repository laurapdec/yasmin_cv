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
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1/4 text-gray-700">{skill.name}</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-4 ml-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
