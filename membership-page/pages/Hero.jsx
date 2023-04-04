import React from "react";
import Slider from "../components/Slider";
//
import { useSession, getSession } from "next-auth/react";
import Login from "@/components/Login";
import Image from "next/image";

const Hero = () => {
  // ___ if not session, return Login page
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <div
      id="hero"
      className="grid 2xl:grid-cols-2 mx-auto grid-cols-1 bg-hero-image w-full h-screen bg-cover bg-center pt-[30vh] px-4"
    >
      {/* WELCOME */}
      <div className="hidden md:flex-row md:gap-x-2">
        {/* ___profile pic */}
        <Image
          className="w-[60px] h-[60px] object-cover rounded-full"
          src={session?.user?.image}
          alt="dp"
          width={1200}
          height={1200}
        />
        {/* ___message */}
        <div className="justify-center text-white/40">
          <h3 className="text-xl font-thin text-white/75">
            {session?.user?.name}
          </h3>
          <p>Bienvenido/a a...</p>
        </div>
      </div>

      <div className="uppercase text-center text-white font-extrabold">
        <h3 className="text-2xl font-thin">Kundalini Marcela.</h3>
        <h1 className="text-2xl 2xl:text-[8vw] md:text-8xl sm:text-6xl">
          Kundalini
        </h1>
        <h3 className="text-xl 2xl:text-[2vw] gap-y-2">para la vida.</h3>
      </div>

      <Slider />
    </div>
  );
};

export default Hero;
