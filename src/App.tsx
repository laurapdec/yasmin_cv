// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import ExperienceCard from './components/ExperienceCard';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Corp',
    details: 'Worked on various projects involving web development.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Solutions',
    details: 'Focused on creating responsive designs and user-friendly interfaces.',
  },
  // Add more experiences here
];

const App: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">My CV</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default App;
