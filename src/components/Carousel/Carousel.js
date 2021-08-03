import React, { useEffect, useState } from 'react';
import { getImageURL } from '../../firebase';
import Spinner from '../Spinner/Spinner';
import './Carousel.css';

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    (async () => {
      const values = await Promise.allSettled([
        await getImageURL("carousel/carousel.jpg"),
        await getImageURL("carousel/carousel2.jpg"),
        await getImageURL("carousel/carousel3.jpg")
      ]);
      setCarousel(values.map(({value}) => value));
    })();
  }, []);

  return (
    <>
      {
        carousel.length
        ? (
          <div className="carousel">
            {
              carousel.map((carouselURL, i) => {
                return (
                  <img
                    key={i}
                    src={carouselURL}
                    width="100%"
                    height="auto"
                    alt={`carousel${i+1}`}
                  ></img>
                );
              })
            }
          </div>
        )
        : <Spinner />
      }
    </>
  );
};

export default Carousel;
