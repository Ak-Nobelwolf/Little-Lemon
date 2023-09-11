// About.js
import React, { useState, useEffect } from 'react';
import Image1 from '../../../assets/restaurant.jpg';
import Image2 from '../../../assets/Mario and Adrian A.jpg';
import Image3 from '../../../assets/Mario and Adrian b.jpg';

export default function About() {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // An array of image sources
  const images = [Image1, Image2, Image3];

  // Function to increment the current image index in a loop
  const incrementImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to update the image every few seconds
  useEffect(() => {
    const interval = setInterval(incrementImage, 5000); // Change image every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval); // Cleanup on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
          and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
          continue to oversee the Little Lemon restaurant, nearly thirty years later.
        </p>
      </section>

      <section className="about-image">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className={`about-image-item ${index === currentImage ? 'active' : ''}`}
            src={imageSrc}
            alt={`Little Lemon restaurant pic${index + 1}`}
          />
        ))}
      </section>
    </article>
  );
}
