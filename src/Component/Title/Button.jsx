import React from 'react';

export default function Button({ text, width, height, bg, br, }) {
  const buttonStyle = {
    background: bg || 'black',      
    width: width ? `${width}px` : '100px', 
    height: height ? `${height}px` : '50px',
    borderRadius: br,

  };

  return (
    <div>
      <button style={buttonStyle}>{text}</button>
    </div>
  );
}
