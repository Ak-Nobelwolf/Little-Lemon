import React from 'react';
import '../../styles/pages/Homepage.css';

// Import your images
import greekSaladImage from '../../assets/greek-salad.jpg';
import vegetableSaladImage from '../../assets/vegetable-salad.jpg';
import cheesePizzaImage from '../../assets/cheese-pizza.jpg';
import lemonDessertImage from '../../assets/lemon-dessert.jpg';

import restaurantImage1 from '../../assets/restaurant.jpg';
import restaurantImage2 from '../../assets/Mario and Adrian A.jpg';
import restaurantImage3 from '../../assets/Mario and Adrian b.jpg';
import restaurantImage4 from '../../assets/restaurant chef B.jpg';

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to Little Lemon Restaurant</h1>
        <p className="hero-location">Located at 221b Baker Street, London</p>
        <p className="hero-description">Discover the finest cuisine in a cozy and elegant atmosphere.</p>
        <a href="/reservations" className="hero-button">Book a Table</a>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2 className="highlights-title">Weekly Specials</h2>
        <div className="highlight">
          <img src={greekSaladImage} alt="Dish 1" className="highlight-image" />
          <h3 className="highlight-name">Greek Salad</h3>
          <p className="highlight-description">
            Our Greek Salad is a refreshing medley of crisp vegetables, kalamata olives, feta cheese, and a tangy
            homemade dressing. It's a delightful combination of flavors that transports your taste buds to the Mediterranean.
          </p>
          <p className="highlight-price">$15.99</p>
        </div>
        <div className="highlight">
          <img src={vegetableSaladImage} alt="Dish 2" className="highlight-image" />
          <h3 className="highlight-name">Vegetable Salad</h3>
          <p className="highlight-description">
            Enjoy a crisp and colorful vegetable salad that combines the freshest garden greens with a medley of seasonal
            vegetables, tossed in a light and zesty vinaigrette dressing. A healthy and refreshing choice.
          </p>
          <p className="highlight-price">$25.99</p>
        </div>
        <div className="highlight">
          <img src={cheesePizzaImage} alt="Dish 3" className="highlight-image" />
          <h3 className="highlight-name">Cheesse Pizza</h3>
          <p className="highlight-description">
            Our Cheesse Pizza is a cheesy paradise for pizza lovers. Loaded with a generous layer of mozzarella and
            cheddar cheese, it's a mouthwatering masterpiece that satisfies cravings and leaves you craving for more.
          </p>
          <p className="highlight-price">$24.99</p>
        </div>
        <div className="highlight">
          <img src={lemonDessertImage} alt="Dish 4" className="highlight-image" />
          <h3 className="highlight-name">Lemon Dessert</h3>
          <p className="highlight-description">
            Indulge in our Lemon Dessert, a zesty and sweet treat that perfectly balances citrusy goodness
            with a luscious, melt-in-your-mouth texture. It's the ideal conclusion to a delectable meal.
          </p>
          <p className="highlight-price">$18.99</p>
        </div>

        <a href="/menu" className="highlights-button">View Menu</a>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonial">
          <p className="testimonial-text">Great food and excellent service!</p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">The best restaurant in town!</p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
        {/* Add more testimonials here */}
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
        Welcome to Little Lemon Restaurant, where exceptional cuisine meets warm hospitality. Located in the heart of our vibrant city, we've been delighting diners with our carefully
        crafted dishes since our humble beginnings. Our dedication to using fresh, locally-sourced ingredients ensures that every meal is a culinary masterpiece. Whether you're
        celebrating a special occasion or simply enjoying a night out, our welcoming ambiance and attentive staff are here to make your dining experience unforgettable.
        Thank you for choosing Little Lemon Restaurant as your culinary destination; we can't wait to serve you!
        </p>
        <div className="about-images">
          <img src={restaurantImage1} alt="restaurant" className="about-image" />
          <img src={restaurantImage2} alt="Mario and Adrian" className="about-image" />
          <img src={restaurantImage3} alt="restaurant" className="about-image" />
          <img src={restaurantImage4} alt="Mario and Adrian" className="about-image" />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
