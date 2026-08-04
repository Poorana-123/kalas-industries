import { useState, useEffect } from "react";
import "../styles/Hero.css"; // Import your CSS file for styling

import hero1 from "../assets/hero5.jpg";
import hero2 from "../assets/hero7.webp";
import hero3 from "../assets/hero1.avif";

const slides = [
  {
    image: hero1,
    title: "Premium Wardrobe Solutions",
    subtitle: "Luxury interiors crafted with precision and elegance.",
  },
  {
    image: hero2,
    title: "Modern Sliding Wardrobes",
    subtitle: "Designed for style, durability, and functionality.",
  },
  {
    image: hero3,
    title: "Transform Your Living Space with elegance",
    subtitle: "Custom-made wardrobes for every home.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>

          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            <div className="hero-buttons">
              <button className="gold-btn">Explore Collection</button>
              <button className="outline-btn">Book Consultation</button>
            </div>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;