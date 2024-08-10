import React, { useEffect, useState } from 'react';
import { getContactInfo } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface ContactInfoData {
  name: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
}

const ContactInfo: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);
  const { language } = useLanguage(); // Get the current language

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
    <div className="p-6 bg-white rounded shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={contactInfo.image}
          alt={contactInfo.name}
          className="h-16 w-16 rounded-full object-cover mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{contactInfo.name}</h1>
        </div>
      </div>
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

export default ContactInfo;