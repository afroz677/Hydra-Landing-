import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <section className="join">
      <h2>Join Hydra</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Join;
