import React from "react";
import heroImage from "../images/hero-image.png";

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero--image">
        <img src={heroImage} alt="hero" />
      </div>
      <div id="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
