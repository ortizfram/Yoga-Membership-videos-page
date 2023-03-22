import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = ({ showMenu, active }) => {
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
        <Link href="/" passHref>
          Inicio
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          Acerca
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          Talleres
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
