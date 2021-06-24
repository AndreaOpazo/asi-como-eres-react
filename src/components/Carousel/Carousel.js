import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="contenedor">
      <img
        src="./images/carousel.jpg"
        width="100%"
        height="auto"
        alt="carouselOne"
      ></img>
      <img
        src="./images/carousel2.jpg"
        width="100%"
        height="auto"
        alt="carouselTwo"
      ></img>
      <img
        src="./images/carousel3.jpg"
        width="100%"
        height="auto"
        alt="carouselThree"
      ></img>
    </div>
  );
};

export default Carousel;
