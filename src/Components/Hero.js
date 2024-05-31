
function Hero(props) {
  return (
    <>
      <div className="relative">
        <img alt="" className="h-[500px] w-full object-cover" src={props.heroImg} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 text-center transform -translate-y-1/2 lg:ml-[350px] -mt-[70px] ml-[130px] sm:m-auto sm:ml-[220px] md:ml-[320px] xl:ml-[490px]">
          <h1 className="text-white font-bold lg:text-6xl text-4xl">
            {props.title}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
