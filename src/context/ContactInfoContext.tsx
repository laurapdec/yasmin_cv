import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getContactInfo } from '../services/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface ContactInfoData {
  name: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  language: string;
}

interface ContactInfoContextProps {
  contactInfo: ContactInfoData | null;
  loading: boolean;
}

interface ContactInfoProviderProps {
  children: ReactNode;
}

const ContactInfoContext = createContext<ContactInfoContextProps>({
  contactInfo: null,
  loading: true,
});

export const ContactInfoProvider: React.FC<ContactInfoProviderProps> = ({ children }) => {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage(); // Access the current language

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo(language); // Pass the language to the service
        if (data) {
          setContactInfo(data as ContactInfoData);
        } else {
          console.error('No Contact Info data found for language:', language);
        }
      } catch (error) {
        console.error('Error fetching Contact Info:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchContactInfo();
  }, [language]); // Re-run when language changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contactInfo) {
    return <div>Error: No Contact Info found for the selected language ({language}).</div>;
  }

  return (
    <ContactInfoContext.Provider value={{ contactInfo, loading }}>
      {children}
    </ContactInfoContext.Provider>
  );
};

export const useContactInfo = () => useContext(ContactInfoContext);
