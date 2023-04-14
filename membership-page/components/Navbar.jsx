// components/Navbar.jsx
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useSession, getSession } from "next-auth/react"; //for profile pic returning
import { signIn, signOut } from "next-auth/react"; // signout
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Login } from "../components/Login.jsx";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  // ___ if not session, return Login page
  const { data: session } = useSession();
  if (!session) return <Login />;

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
              {/* dropdown */}
              <div
                className="w-[50px] h-[50px] relative"
                onClick={toggleDropdown}
              >
                {/* dropdown ICON */}
                <KeyboardDoubleArrowDownIcon
                  className="absolute top-4 right-0 transform translate-x-1/2 -translate-y-full cursor-pointer"
                  style={{ width: "30px", height: "30px" }}
                />
                {/* profile PIC */}
                <Image
                  src={session?.user?.image}
                  alt="dp"
                  width={60}
                  height={60}
                  className="object-cover rounded-full cursor-pointer border border-white"
                />
              </div>
            </div>
          </div>

          {/* SignOut */}
          {activeDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-black/50 backdrop-blur-md py-2 px-4 rounded-md shadow-lg">
              <button
                onClick={() => signOut()}
                className="px-8 py-2 font-bold  bg-white/20"
              >
                Salir
              </button>
            </div>
          )}
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
