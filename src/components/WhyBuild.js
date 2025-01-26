import React from 'react';
import './WhyBuild.css';

const WhyBuild = () => {
  const reasons = [
    { title: 'Education', description: 'Enhance learning experiences' },
    { title: 'Simulation', description: 'Create realistic simulations' },
    { title: 'Entertainment', description: 'Deliver exciting experiences' },
    { title: 'Design', description: 'Visualize concepts in 3D' },
  ];

  return (
    <section className="why-build">
      <h2>Why Build With Hydra VR</h2>
      <div className="cards">
        {reasons.map((reason, index) => (
          <div className="card" key={index}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBuild;
