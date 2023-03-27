import React from "react";
import Slider from "../components/Slider";
//
import { useSession, getSession } from "next-auth/react";

const Hero = () => {
  // ___ if not session, return Login page
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <div
      id="hero"
      className="bg-hero-image w-full h-screen bg-cover bg-center flex items-center px-6 flex-col pt-[20vh]"
    >
      {/* WELCOME */}
      <div className="hidden md:grid grid-cols-2 content-between justify-items-center items-center">
        {/* ___profile pic */}
        <img
          className="grid w-[60px] h-[60px] my-4 object-cover rounded-full"
          src={session?.user?.image}
          alt="dp"
        />
        {/* ___message */}
        <div className="flex flex-col items-center justify-center text-white/40">
          <h3 className="text-xl font-thin text-white/75">
            {session?.user?.name}
          </h3>
          <p>Bienvenido/a a...</p>
        </div>
      </div>

      <div className="uppercase text-center text-white font-extrabold">
        <h3 className="text-2xl font-thin">Kundalini Marcela.</h3>
        <h1 className="text-2xl md:text-8xl sm:text-6xl">Kundalini</h1>
        <h3 className="text-xl mt-[-2vh] md:mt-[-3vh]">para la vida.</h3>
      </div>
      <div className="pt-[10vh]">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
