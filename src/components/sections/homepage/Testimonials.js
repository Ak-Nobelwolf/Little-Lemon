// Testimonials.js
import React from 'react';
import '../../../styles/sections/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      review:
        'I had an amazing dining experience at Little Lemon. The food was delicious, and the staff was friendly and attentive. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      review:
        'The Mediterranean flavors at Little Lemon are unbeatable. I particularly loved their pasta dishes. A great place for a cozy dinner.',
    },
    {
      name: 'Mike Johnson',
      rating: 5,
      review:
        'Little Lemon never disappoints. The atmosphere is charming, and the food is consistently excellent. I will definitely be back.',
    },
    {
      name: 'Sarah Brown',
      rating: 4,
      review:
        'I visited Little Lemon for a special occasion, and it was perfect. The desserts are to die for! Great place for a romantic dinner.',
    },
  ];

  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="rating">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <p className="review">{testimonial.review}</p>
            <p className="name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
