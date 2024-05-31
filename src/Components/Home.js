// import React from "react";
// import video from "./Assets/vid.mp4";

// import Popular from "./Popular";
// import Cards from "./Cards";
// import NewsLetter from "./NewsLetter";

// function Home() {
//   return (
//     <>
//       <div className="relative ">
//         <div className="h-[200px]">
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             src={video}
//             muted
//             autoPlay
//             loop
//             typeof="video/mp4"
//           ></video>
//         </div>
//         <div className="bg-purple-500 relative top-1/2 left-1/4 transform -translate-y-1/2 text-left w-[100px] lg:mt-10">
//           <p className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold sm:ml-[-120px]">
//             WELCOME TO TRIMETH <br />
//             We are the best in our Area
//           </p>
//         </div>
//       </div>
//       <Popular />
//       <Cards />
//       <NewsLetter />
//     </>
//   );
// }
// export default Home;
import React from "react";
import video from "./Assets/vid.mp4";

import Popular from "./Popular";
import Cards from "./Cards";
import NewsLetter from "./NewsLetter";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="h-[500px] md:h-[600px] relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            muted
            autoPlay
            loop
            type="video/mp4"
          ></video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/4 transform lg:-mt-4 -translate-y-1/2 text-left w-[100px] lg:mt-10">
            <p className="text-white text-3xl md:text-3xl  lg:text-5xl font-extrabold sm:ml-[-120px]">
              WELCOME TO TRIMETH <br />
              We are the best in our Area
            </p>
          </div>
        </div>
      </div>
      <Popular />
      <Cards />
      <NewsLetter />
    </>
  );
}

export default Home;
