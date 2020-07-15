import React from 'react';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <div >
      <Logo size={120} />

      <div >
        <a  href="/">
          <h6>How To Play</h6>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
