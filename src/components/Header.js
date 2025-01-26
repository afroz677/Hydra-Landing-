import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">HYDRA</div>
      <nav>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>How To</li>
        </ul>
      </nav>
      <div className="buttons">
        <button>Contact Us</button>
        <button>Join Hydra</button>
      </div>
    </header>
  );
};

export default Header;
