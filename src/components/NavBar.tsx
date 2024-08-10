import React from 'react';
import { useContactInfo } from '../context/ContactInfoContext';

const Navbar: React.FC = () => {
  const { contactInfo, loading } = useContactInfo();

  if (loading || !contactInfo) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center shadow">
      <div className="flex items-center space-x-4">
        <img
          src={contactInfo.image}  // Using the image from Contact Info
          alt={contactInfo.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">{contactInfo.name}</h1>
      </div>
      <div>
        <select className="p-2 border rounded">
          <option>English</option>
          <option>Portuguese</option>
          <option>French</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
