import React from 'react';
import './ProductCard.css';

export default function ProductCard({ price, quantity, Name, Description, bg,  }) {
  return (
       <div>


    <div className='ProductCard' style={{ background: bg }}>
      <h1>Price: {price}</h1>
      <h2>Quantity: {quantity}</h2>
      <h3>Name: {Name}</h3>
      <p>Description: {Description}</p>
    </div>
    

  </div>
);
}
