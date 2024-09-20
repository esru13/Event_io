import React, { useState } from "react";

import t1 from '../assets/t1.jpg';
import t3 from '../assets/t3.jpg';
import t22 from '../assets/t22.jpg';
import site from '../assets/site.jpg';
import lee from '../assets/lee.jpg';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Eventio User",
    stars: 5,
    testimonial: "Eventio made finding and booking events so easy! I love how personalized the recommendations are based on my preferences. I’ve discovered amazing local events I wouldn’t have known about otherwise. The booking process is super simple, and I never have to worry about missing out!",
    image: t1,
  },
  {
    name: " Ikram D.",
    role: "Eventio User",
    stars: 4,
    testimonial: "I had a great experience with Eventio. The app was user-friendly and made booking tickets a breeze.",
    image: t3,
  },
  {
    name: "Alice W.",
    role: "Eventio User",
    stars: 5,
    testimonial: "Eventio's event recommendations are spot-on! I found exactly what I was looking for and loved the ease of booking.",
    image: t22,
  },
  {
    name: "Mike R.",
    role: "Eventio User",
    stars: 4,
    testimonial: "The app is fantastic for finding events. I appreciate the user-friendly interface and quick booking process.",
    image: site,
  },
  {
    name: "Emma L.",
    role: "Eventio User",
    stars: 5,
    testimonial: "A great app with excellent event recommendations. Booking is quick, and I love the ease of managing my tickets.",
    image: lee,
  }
];

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCircleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleArrowClick = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 px-6 py-24 relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">- Testimonial</h2>
        <h3 className="text-3xl font-bold">Our customer testimonials</h3>
      </div>
      <div className="relative flex flex-col items-center">
        <button
          className="absolute left-7 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 transition-colors"
          onClick={() => handleArrowClick("left")}
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-7 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 transition-colors"
          onClick={() => handleArrowClick("right")}
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex space-x-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-12 h-12 rounded-full cursor-pointer border-2 ${selectedIndex === index ? 'border-[#5516DA] scale-125' : 'border-gray-300'} transition-transform duration-300`}
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <img
            src={testimonials[selectedIndex].image}
            alt={testimonials[selectedIndex].name}
            className="w-32 h-32 rounded-full border-4 border-[#5516DA]"
          />
          <div className="mb-2">
            <h4 className="text-xl font-semibold">{testimonials[selectedIndex].name}</h4>
            <p className="text-md text-gray-600">{testimonials[selectedIndex].role}</p>
          </div>
          <div className="mb-4 flex items-center justify-center">
            {[...Array(testimonials[selectedIndex].stars)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .587l3.668 7.425 8.168 1.187-5.91 5.758 1.394 8.114L12 18.895l-7.32 3.87L6.074 14.957 0.164 9.233l8.13-1.186L12 .587z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-800 italic max-w-xs text-center">
            {testimonials[selectedIndex].testimonial}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
