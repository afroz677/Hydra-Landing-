import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Dive Into The Depths <br /> Of <span>Virtual Reality</span>
        </h1>
        <p>
          Explore immersive VR experiences to bring your imagination to life.
        </p>
        <button>Build Your World</button>
      </div>
      <div className="hero-image">
        <img src="your-image-url" alt="Virtual Reality" />
      </div>
    </section>
  );
};

export default Hero;
