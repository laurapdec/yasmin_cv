// src/components/ExperienceCard.tsx
import React, { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  details: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div
      className="p-4 m-4 border rounded-lg shadow-lg hover:bg-gray-100 transition-all cursor-pointer"
      onClick={toggleDetails}
    >
      <h2 className="text-xl font-semibold">{experience.title}</h2>
      <p className="text-gray-600">{experience.company}</p>
      {showDetails && <p className="text-gray-800 mt-4">{experience.details}</p>}
    </div>
  );
};

export default ExperienceCard;
