import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center z-40">
      {/* logo */}
      <div className="text-2xl font-bold text-center uppercase border-2 p-2 shadow-xl bg-black/20 backdrop-blur-sm">
        <h1>
          K <span className="block text-4xl">M</span>
        </h1>
      </div>

      {/* nav */}
      <nav>
        <div className="absolute right-7 md:hidden top-6 scale-150">
          <MenuIcon
            onClick={showMenu}
            className="scale-150 cursor-pointer shadow-lg bg-black/20 backdrop-blur-sm rounded-md"
          />
        </div>

        <ul
          className="hidden md:flex gap-8 p-6 uppercase  bg-black/30 backdrop-blur-lg"
          style={{ scrollBehavior: "smooth" }}
        >
          <li>
            <Link href="/" passHref>
              Inicio
            </Link>
            <Link href="/" passHref>
              Acerca
            </Link>
            <Link href="/" passHref>
              Talleres
            </Link>
            <Link href="/" passHref>
              Contacto
            </Link>
          </li>
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
