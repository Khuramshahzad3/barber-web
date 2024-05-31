

import imgpro1 from "./Assets/b1.jpg";
import imgpro2 from "./Assets/b2.jpg";
import imgpro3 from "./Assets/b3.jpg";
import CardsData from "./CardsData";
function Cards() {
  return (
    <div className="Projects">
      <h1 className="font-bold">Our Barbers</h1>
      <p className="text-xl">Here are the Our Talented Barbers</p>
      <div className="projectcard">
        <CardsData
          image={imgpro1}
          heading="Mr.Malton"
          text="I am hair, waxing and beard specialist"
        />
        <CardsData
          image={imgpro2}
          heading="Mr.Jack"
          text="I am hair, waxing and beard specialist"
        />
        <CardsData
          image={imgpro3}
          heading="Mr.Jordon"
          text="I am hair, waxing and beard specialist"
        />
      </div>
    </div>
  );
}
export default Cards;
