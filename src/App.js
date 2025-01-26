import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyBuild from './components/WhyBuild';
import Technologies from './components/Technologies';
import HowWeBuild from './components/HowWeBuild';
import Join from './components/Join';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <WhyBuild />
      <Technologies />
      <HowWeBuild />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
