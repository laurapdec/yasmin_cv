import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getContactInfo } from '../services/firestoreService';

interface ContactInfoData {
    name: string;
    image: string;
    email: string;
    phone: string;
    linkedin: string;
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

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo();
        console.log('Fetched Contact Info:', data);
        setContactInfo(data as ContactInfoData);
      } catch (error) {
        console.error('Error fetching Contact Info:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchContactInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contactInfo) {
    return <div>Error: No data found</div>;
  }

  return (
    <ContactInfoContext.Provider value={{ contactInfo, loading }}>
      {children}
    </ContactInfoContext.Provider>
  );
};

export const useContactInfo = () => useContext(ContactInfoContext);
