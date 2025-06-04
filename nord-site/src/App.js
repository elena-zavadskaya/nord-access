// src/App.js
import React from 'react';

// Секции
import Header          from './components/Header/Header';
import Hero            from './components/Hero/Hero';
import Overview        from './components/Overview/Overview';
import ModulesList     from './components/ModulesList/ModulesList';
import Features        from './components/Features/Features';
import AboutUs         from './components/AboutUs/AboutUs';
import SyncAndDownload from './components/SyncAndDownload/SyncAndDownload';
import Contacts        from './components/Contacts/Contacts';
import Footer          from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <ModulesList />
      <Features />
      <AboutUs />
      <SyncAndDownload />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
