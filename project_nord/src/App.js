import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Overview from './components/Overview/Overview';
import ModulesSection from './components/ModulesSection/ModulesSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import AboutSection from './components/AboutSection/AboutSection';
import SyncSection from './components/SyncSection/SyncSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Overview />
        <ModulesSection />
        <FeaturesSection />
        <AboutSection />
        <SyncSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
