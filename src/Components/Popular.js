import React from "react";
import m1 from "./Assets/1.jpg";
import m2 from "./Assets/2.jpg";
import m3 from "./Assets/1.jpg";
import m4 from "./Assets/2.jpg";
import "./PopularStyles.css";
function Popular() {
  return (
    <div className="destination">
      <h1 className="font-bold">Popular Things</h1>
      <p className="cen text-lg">Here are Popular Things</p>

      <div className="first-des">
        <div className="dest-text">
          <h2 className="font-bold text-2xl">Hair Cutting</h2>
          <p>
            At our barber shop, we specialize in providing top-notch men's
            haircuts tailored to each individual's style and preference. Our
            skilled barbers are trained in the latest cutting techniques and
            trends, ensuring that every client leaves looking sharp and feeling
            confident. Whether you prefer a classic cut like a taper fade, crew
            cut, or pompadour, or you're looking for something more modern and
            edgy, our team has the expertise to deliver
          </p>
        </div>
        <div className="image1">
          <img alt="img" src={m1}></img>
          <img alt="img" src={m3}></img>
        </div>
      </div>
      <div className="first-des-reverse">
        <div className="dest-text">
          <h2 className="font-bold text-2xl">Beared Setting</h2>
          <p>
            At our barber shop, we take beard grooming to the next level with
            our expert beard setting services. Understanding that a well-groomed
            beard can significantly enhance your overall appearance, our barbers
            are adept at shaping, trimming, and styling beards of all lengths
            and styles. Whether you’re aiming for a neatly trimmed stubble, a
            defined and sculpted full beard, or a sophisticated and stylish
            goatee, we’ve got you covered. We start with a personalized
            consultation to discuss your beard goals and assess your facial
            structure, ensuring that the final look complements your features
            perfectly.
          </p>
        </div>
        <div className="image1">
          <img alt="img" src={m2}></img>
          <img alt="img" src={m4}></img>
        </div>
      </div>
    </div>
  );
}

export default Popular;
