import React from 'react';
import './HowWeBuild.css';

const HowWeBuild = () => {
  const steps = [
    'Concept Development',
    '3D Modeling',
    'Testing & Optimization',
    'Final Deployment',
  ];

  return (
    <section className="how-we-build">
      <h2>How We Build with Hydra VR</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <h3>0{index + 1}</h3>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeBuild;
