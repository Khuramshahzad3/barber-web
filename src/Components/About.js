import React from "react";
import Hero from "./Hero";
import "./AboutStyles.css";
import aboutimg from "./Assets/4.jpg";
function About() {
  return (
    <div>
      <Hero cName="hero-about" heroImg={aboutimg} title="About Us" />
      <div className="About-container">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
          About Us
        </h1>
        <p>
          Welcome to <span className="font-bold">TRIMETH</span> , where tradition meets style. Our expert
          barbers provide a full range of grooming services, including classic
          haircuts, modern styles, beard trims, and straight razor shaves. With
          a keen eye for detail and a passion for perfection, we ensure every
          client leaves looking and feeling their best. Relax in our
          comfortable, vintage-inspired space, and enjoy a premium grooming
          experience tailored just for you. Whether you need a quick trim or a
          complete makeover, <span className="font-bold">TRIMETH</span> is your destination for
          top-notch barbering.
        </p>
      </div>
    </div>
  );
}

export default About;
