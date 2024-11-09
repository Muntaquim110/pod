import React, { useState } from "react";
import "./comp.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {  src: "1.jpg", text : "1st" },
    { src: "2.jpg", text: "2nd" },
    { src: "3.jpg", text: "3rd" },
    { src: "4.jpg", text: "4th" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="H1">
      <h1>About Us</h1>
      <div className="p">
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="slideshow-container">
        <div className="mySlide0-fade">
          <div className="numbertext">
            {currentSlide + 1} / {slides.length}
          </div>
          <img
            src={slides.src}
            style={{ width: "100%" }}
            alt={slides[currentSlide].src}
          />
          <div className="text">{slides[currentSlide].src}</div>
        </div>

        <button onClick={prevSlide} className="prev">
          ❮ Prev
        </button>
        <button onClick={nextSlide} className="next">
          Next ❯
        </button>
      </div>
    </div>
  );
};

export default About;
