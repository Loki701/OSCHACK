import React, { useEffect, useState } from "react";
import { bgGoldRed, cans } from "../../images"; // Import your background image
import "./Hero.css";

const Hero = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div id="hero" className="parallax-wrapper">
      <div className="parallax-content">
        <img
          className="hero__background"
          src={bgGoldRed}
          alt="Hero background Foto"
          style={{ transform: `translateY(${scrollTop * 0.5}px)` }} // Apply transform inline
        />
        <div className="hero__content">
          <div className="content-text">
            <h1>Dino Energy</h1>
            <p>Bosting your energy, the healthy way.</p>
            <button>Shop Now</button>
            <button>Explore</button>
          </div>
          <div className="content-image">
            <img src={cans} alt="Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
