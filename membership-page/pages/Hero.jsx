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
      className="mx-auto grid grid-cols-1 2xl:grid-cols-2  bg-hero-image w-full h-screen bg-cover bg-center "
    >
      <div className="grid md:flex items-center justify-center">
        <Image
          src="/white-logo-buonavibra.png"
          width={600}
          height={600}
          alt=""
        />
      </div>

      <Slider className="grid" />
    </div>
  );
};

export default Hero;
