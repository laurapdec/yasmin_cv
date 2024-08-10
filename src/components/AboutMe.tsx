import React, { useEffect, useState } from 'react';
import { getAboutMe } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface AboutMeData {
  text: string;
}

const AboutMe: React.FC = () => {
  const { language } = useLanguage(); // Assuming you have a LanguageContext to manage the current language
  const [aboutMe, setAboutMe] = useState<AboutMeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const data = await getAboutMe(language);
        setAboutMe(data as AboutMeData);
      } catch (error) {
        console.error('Error fetching About Me data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchAboutMe();
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!aboutMe) {
    return <div>Error: No data found</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">{aboutMe.text}</p>
    </div>
  );
};

export default AboutMe;
