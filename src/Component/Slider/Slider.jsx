import React, { useState, useEffect } from 'react';
import img1 from '../Slider/assets/chiken.jpg'
import img2 from '../Slider/assets/steak.jpg';
import img3 from '../Slider/assets/steak2.jpg';
import img4 from '../Slider/assets/chiken2.webp';

import './Slider.css'; 

export default function Slider() {
  const images = [img1, img2, img3, img4]; 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="Slider Image" className="slider-image"/>

      <button onClick={handlePrev} className="slider-button slider-button-left" >  &lt;  </button>

      <button  onClick={handleNext}  className="slider-button slider-button-right" >  &gt;  </button>
    </div>
  );
}