// components/Navbar.jsx
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const { user } = useUser();

  if (!user) {
    return null; // Return a loading state or redirect to a login page
  }
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center z-40">
      <Link href="/">
        {/* logo */}
        <div className="flex justify-center cursor-pointer text-3xl font-bold text-center uppercase border-2 p-3 shadow-xl bg-black/20 backdrop-blur-sm">
          <h1>
            B<br />V
          </h1>
        </div>
      </Link>

      {/* nav */}
      <nav>
        <div className="absolute right-7 md:hidden top-6 scale-150">
          <MenuIcon
            onClick={showMenu}
            className="scale-150 cursor-pointer shadow-lg bg-black/20 backdrop-blur-sm rounded-md "
          />
        </div>

        <ul
          className="hidden md:flex gap-8 p-6 uppercase  bg-black/30 backdrop-blur-lg items-center"
          style={{ scrollBehavior: "smooth" }}
        >
          <li>
            <Link href="/">
              <HomeIcon />
            </Link>
            <Link href="/#about">Acerca</Link>
            <Link href="/blog">Clases</Link>
            <Link
              href="/taller"
              className=" font-extrabold hover:text-golden hover:underline"
            >
              <span>🍁</span>
              Talleres
            </Link>
            <Link href="/#contact">Contacto</Link>
          </li>

          {/* ___profile pic */}
          <div className="relative">
            <div className="flex justify-end">
              <div className="w-12 h-12 relative">
                {/* dropdown ICON */}
                <KeyboardDoubleArrowDownIcon
                  className="absolute top-4 right-0 transform  -translate-y-full cursor-pointer"
                  style={{ width: "30px", height: "30px" }}
                />
                {/* profile PIC and user settings*/}
                <UserButton className=" object-cover cursor-pointer border-white w-[400px] h-[400px]" />
              </div>
            </div>
          </div>
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
