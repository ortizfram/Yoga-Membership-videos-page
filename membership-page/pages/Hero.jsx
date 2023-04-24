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
      className="grid 2xl:grid-cols-2 mx-auto grid-cols-1 bg-hero-image w-full h-screen bg-cover bg-center px-4"
    >
      {/* WELCOME */}
      <div className="hidden md:flex-row md:gap-x-[100px]">
        {/* ___message */}
        <div className="justify-center text-white/40">
          <h3 className="text-xl font-thin text-white/75">{user.firstName}</h3>
          <p>Bienvenido/a a...</p>
        </div>
      </div>

      <div>
        <Image
          src="/white-logo-buonavibra.png"
          width={2400}
          height={2400}
          className=""
        />
      </div>

      <Slider />
    </div>
  );
};

export default Hero;
