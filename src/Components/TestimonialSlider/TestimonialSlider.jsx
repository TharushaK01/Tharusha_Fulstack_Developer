import React from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    review: "Had like 6 profile pictures with banners made. It was a great experience. Very thorough. Proactive communication. And timely responses. This is an excellent seller. Get your banner today!",
    name: "ericleo108",
    country: "USA"
  },
  {
    review: "He was very co-operative when working on my Youtube banner, I provided the images and he merged them into a fantastic looking design, he is flexible, polite and a great designer who follows intructions until client is happy, Great seller! ",
    name: "kaboom_forex",
    country: "UK"
  },
  {
    review: "Decent artwork for a decent price",
    name: "lxleaderzz",
    country: "UK"
  },
  {
    review: "Great work. fast and reliable",
    name: "saturnspikes",
    country: "USA"
  },
  {
    review: "Great work",
    name: "skypix",
    country: "Ireland"
  },
  {
    review: "Got a banner done. It was another great experience. thank you!",
    name: "ericleo108",
    country: "USA"
  },
  {
    review: "Decent artwork for a decent price",
    name: "lxleaderzz",
    country: "UK"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">Client Testimonial</h2>
      <div className="slider-container">
        <div className="slider-track">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="review">{testimonial.review}</p>
              <h3 className="name">{testimonial.name}</h3>
              <p className="country">{testimonial.country}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index + testimonials.length}>
              <p className="review">{testimonial.review}</p>
              <h3 className="name">{testimonial.name}</h3>
              <p className="country">{testimonial.country}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;