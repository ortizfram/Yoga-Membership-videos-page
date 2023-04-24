import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { SignOutButton, useUser } from "@clerk/clerk-react";

const MobileMenu = ({ showMenu, hideMenu, active }) => {
  const handleLinkClick = () => {
    showMenu();
    hideMenu();
  };

  const { user } = useUser();

  if (!user) {
    return null; // Return a loading state or redirect to a login page
  }
  return (
    <ul
      className={
        active
          ? "z-0 flex-col flex items-center fixed inset-0 left-1/4 uppercase gap-8 bg-black/40 backdrop-blur-lg justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <li>
        <CloseIcon onClick={showMenu} className="cursor-pointer scale-150" />
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/">
          <HomeIcon />
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#about">
          Acerca
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/blog">
          Clases
        </Link>
      </li>
      <li>
        <Link
          onClick={handleLinkClick}
          href="/taller"
          className="font-extrabold hover:text-golden hover:underline "
        >
          🍁Talleres
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#contact">
          Contacto
        </Link>
      </li>
      <div>
        <SignOutButton className="px-8 py-2 font-bold bg-white/20">
          👋 Salir
        </SignOutButton>
      </div>
    </ul>
  );
};

export default MobileMenu;
