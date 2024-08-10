import React, { useEffect, useState } from 'react';
import { getAboutMe } from '../services/firestoreService';
import { getContactInfo } from '../services/firestoreService'; 
import { useLanguage } from '../context/LanguageContext';

interface ContactInfoData {
  name: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
}

const AboutMe: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);
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


  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo(language); // Pass the language parameter
        setContactInfo(data as ContactInfoData);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo().catch((error) => console.error('Promise rejected in fetchContactInfo:', error));
  }, [language]);

  if (!contactInfo) {
    return <div>Loading...</div>;
  }


  return (
  <div className="p-6 bg-white rounded shadow">
  <h2 className="text-xl font-semibold mb-4">About Me</h2>
  <p className="text-gray-700">{aboutMeText || 'Loading...'}</p>

  <div className="mt-4">
        <p>
          <strong>Email:</strong> 
          <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            {contactInfo.email}
          </a>
        </p>
        <p>
          <strong>Phone:</strong> 
          <a href={`tel:${contactInfo.phone}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            {contactInfo.phone}
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            {contactInfo.linkedin}
          </a>
        </p>
      </div>
  </div>
  );
};

export default AboutMe;
