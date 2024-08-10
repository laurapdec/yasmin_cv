import React from 'react';
import { useContactInfo } from '../context/ContactInfoContext';

const ContactInfo: React.FC = () => {
  const { contactInfo, loading } = useContactInfo();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contactInfo) {
    return <div>Error: No contact info found</div>;
  }

  // Safeguard assignment to ensure TypeScript infers correct types
  const { name, image, email, phone, linkedin } = contactInfo;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
      </div>
      <div className="mt-4">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            {linkedin}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
