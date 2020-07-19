import React from 'react';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <div >
      <Logo size={120} />

      <div className="hidden md:hidden">
        <a className="text-gray-600 hover:text-gray-800" href="/">
          <h6>How To Play</h6>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
