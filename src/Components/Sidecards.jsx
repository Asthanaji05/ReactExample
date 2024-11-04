// Sidecards.jsx
import React from 'react';

function Sidecards({ name, src }) {
  return (
    <div className='sections'>
      <img src={src} alt={name} /> {/* img tag use kiya hai */}
      <p>{name}</p>
    </div>
  );
}

export default Sidecards;
