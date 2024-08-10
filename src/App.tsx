// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ExperienceList from './components/ExperienceList';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import { LanguageProvider } from './context/LanguageContext';
import { ContactInfoProvider } from './context/ContactInfoContext';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ContactInfoProvider>
      <NavBar />
        <Layout>
          <div className="md:col-span-1 space-y-8">
            <AboutMe /> 
            <Languages />
            <Skills /> 
            <Hobbies />
          </div>
          <div className="md:col-span-2 space-y-8">
            <ExperienceList />
            <Education />
          </div>
        </Layout>
      </ContactInfoProvider>
    </LanguageProvider>
  );
};

export default App;
