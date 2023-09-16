import React from 'react';

import Hero from '../sections/homepage/Hero';
import Specials from '../sections/homepage/Specials';
import Testimonials from '../sections/homepage/Testimonials';
import About from '../sections/homepage/About';

function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
