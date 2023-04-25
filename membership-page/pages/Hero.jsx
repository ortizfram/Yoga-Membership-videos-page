import React from "react";
import Slider from "../components/Slider";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Hero = () => {
  const { user } = useUser();

  if (!user) {
    return null; // Return a loading state or redirect to a login page
  }

  return (
    <div
      id="hero"
      className="mx-auto grid grid-cols-1 2xl:grid-cols-2  bg-hero-image w-full h-screen bg-cover bg-center  p-[10vw]"
    >
      {/* WELCOME */}
      {/* <div className="hidden md:flex-row md:gap-x-[50px]">
        ___message
        <div className="justify-center text-white/40">
          <h3 className="text-xl font-thin text-white/75">{user.firstName}</h3>
          <p>Bienvenido/a a...</p>
        </div>
      </div> */}

      <div className="grid md:flex items-center justify-center">
        <Image src="/white-logo-buonavibra.png" width={600} height={600} />
      </div>

      <Slider className="grid" />
    </div>
  );
};

export default Hero;
