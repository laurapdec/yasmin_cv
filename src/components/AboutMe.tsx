import React, { useEffect, useState } from 'react';
import { getAboutMe } from '../services/firestoreService'; 
import { useLanguage } from '../context/LanguageContext';

const AboutMe: React.FC = () => {
  const [aboutMeText, setAboutMeText] = useState<string | undefined>();
  const { language } = useLanguage(); 

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const data = await getAboutMe(language);
        if (data && typeof data.text === 'string') {
          setAboutMeText(data.text);
        }
      } catch (error) {
        console.error('Error fetching About Me data:', error);
      }
    };

    fetchAboutMe().catch((error) => console.error('Promise rejected in fetchAboutMe:', error));
  }, [language]);

  return (
  <div className="p-6 bg-white rounded shadow">
  <h2 className="text-xl font-semibold mb-4">About Me</h2>
  <p className="text-gray-700">{aboutMeText || 'Loading...'}</p>
  </div>
  );
};

export default AboutMe;
