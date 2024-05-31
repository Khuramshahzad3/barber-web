import React from "react";
import Hero from "./Hero";
import aboutimg from "./Assets/4.jpg";
import I1 from ".//Assets/8.jpg";
import I2 from ".//Assets/2.jpg";
import I3 from ".//Assets/7.jpg";
import CardsData from "./CardsData";
function Services() {
  return (
    <div>
      
      <Hero
        cName="hero-about"
        heroImg={aboutimg}
        title="Services"
        
      />
      <div className="Services">
        <h1 className="font-bold text-2xl">Here are Our Services</h1>
        <div className="servicecard">
          <CardsData image={I1} heading="Hair Cut" text="300 RS" />
          <CardsData image={I2} heading="Beard Cut" text="300 RS" />
          <CardsData image={I3} heading="Waxing" text="500 RS" />
        </div>
      </div>
    
    </div>
  );
}

export default Services;
