import React from "react";
import Slider from "../components/Slider";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-hero-image w-full h-screen bg-cover bg-center flex items-center px-6 flex flex-col pt-[20vh]"
    >
      <div className="uppercase text-center text-white font-extrabold ">
        <h3 className="text-sm font-light">Kundalini Marcela.</h3>
        <h1 className="text-2xl md:text-8xl sm:text-6xl">Kundalini</h1>
        <h3 className="text-2xl">para la vida.</h3>
      </div>
      <div className="pt-[10vh]">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
