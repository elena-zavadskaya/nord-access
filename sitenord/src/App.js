import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Modules />
        <Features />
        <HowItWorks />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
