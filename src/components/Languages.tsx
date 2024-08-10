import React, { useEffect, useState } from 'react';
import { getLanguages } from '../services/firestoreService';

interface Language {
  name: string;
  proficiency: string;
}

const Languages: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await getLanguages();
        setLanguages(data as Language[]);
      } catch (error) {
        console.error('Error fetching languages data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchLanguages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      <ul className="list-disc list-inside">
        {languages.map((lang, index) => (
          <li key={index} className="text-gray-700">
            {lang.name}: {lang.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
