import React, { useEffect, useState } from "react";
import { bgGoldRed, cans } from "../../images"; // Import your background image
import "./Hero.css";
import Button from "../button/Button";

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
    <section id="hero" className="parallax-wrapper">
      <div className="parallax-content">
        <img
          className="hero__background"
          src={bgGoldRed}
          alt="Hero background Foto"
          style={{ transform: `translateY(${scrollTop * 0.5}px)` }} // Apply transform inline
        />
        <div className="hero__content">
          <div className="content-text">
            <div class="wrapper">
              <div class="bg"> Dino Energy </div>
              <div class="fg"> Dino Energy </div>
            </div>
            {/* <h1>Dino Energy</h1> */}
            <p>Bosting your energy, the healthy way.</p>
            <div className="button-container">
              <Button title="Explore" id="about" />
              <Button title="Shop Now" id="buy" toggle={false} />
            </div>
          </div>
          {/* <div className="content-image"> */}
            <img src={cans} alt="Product" />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
