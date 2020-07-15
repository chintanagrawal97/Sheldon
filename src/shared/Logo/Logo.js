import React from 'react';

const Logo = ({ size = 200 }) => {
  return (
    <div
      style={{ width: size, height: size, fontSize: size / 8 }}
     
    >
      <span>All The</span>
      <span>Words</span>
      <span>That</span>
      <span>I Know</span>
    </div>
  );
};

export default Logo;
