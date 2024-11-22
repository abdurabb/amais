import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Stats from './components/Stats';
import CampusLife from './components/CampusLife';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Stats />
      <CampusLife />
      <Footer />
    </div>
  );
}

export default App;