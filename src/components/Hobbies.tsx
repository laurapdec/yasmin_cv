import React, { useEffect, useState } from 'react';
import { getHobbies } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface Hobby {
  name: string;
  description?: string;
  language: string;
}

const Hobbies: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage(); // Get the current language from the context

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const data = await getHobbies(language);
        setHobbies(data as Hobby[]);
      } catch (error) {
        console.error('Error fetching hobbies data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchHobbies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
      <ul className="list-disc list-inside">
        {hobbies.map((hobby, index) => (
          <li key={index} className="text-gray-700">
            {hobby.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
