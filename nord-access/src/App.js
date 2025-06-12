// src/App.jsx
import React from 'react';
import './App.css'; // глобальные стили (reset, шрифты и др.)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from "./components/FeaturesSection";
import Overview from './components/Overview';
import AboutUs from './components/AboutUs';
import SyncSection from './components/SyncSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <FeaturesSection />
        <AboutUs />
        <SyncSection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

