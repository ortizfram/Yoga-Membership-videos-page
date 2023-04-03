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
      <Link href="/">
        {/* logo */}
        <div className="cursor-pointer text-2xl font-bold text-center uppercase border-2 p-2 shadow-xl bg-black/20 backdrop-blur-sm">
          <h1>
            K <span className="block text-4xl">M</span>
          </h1>
        </div>
      </Link>

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
            <Link href="/">Inicio</Link>
            <Link href="/#about">Acerca</Link>
            <Link href="/blog">Clases</Link>
            <Link
              href="/taller"
              className=" font-extrabold hover:text-golden hover:underline"
            >
              Talleres
            </Link>
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
