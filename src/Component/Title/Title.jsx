import React from 'react';

export default function Title({ title, color, fontsize, center }) {
  const titleStyle = {
    color: color || 'black',   
    fontSize: fontsize ? `${fontsize}px` : '2rem',  
    textAlign: center || 'left' 
  };

  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
}
