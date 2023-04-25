import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Contact = () => {
  return (
    //container
    <div
      id="contact"
      className="sm:flex sm:justify-center flex-col items-center bg-contact-image bg-cover bg-center bg-brightness-50 py-6 h-[50vh] mt-[310px] md:m-auto md:mt-[50px]"
    >
      {/* section title */}
      <h1 className="p-4 text-2xl italic font-bold text-center text-white">
        Contacto.
      </h1>

      {/* container for icons */}
      <div class="sm:items-center sm:max-w-[432px] sm:flex sm:text-center sm:justify-between shadow-xl rounded-r-2xl rounded-t-2xl bg-black300/20 backdrop-blur-lg p-8 mx-[100px]">
        <Link href="http://www.youtube.com">
          <YouTubeIcon className="mx-5 text-white scale-150 hover:text-white/50 cursor-pointer" />
        </Link>
        <Link href="https://wa.me/2615996913">
          <WhatsAppIcon className="mx-5 text-white scale-150 hover:text-white/50 cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/marcelamarzetti/">
          <InstagramIcon className="mx-5 text-white scale-150 hover:text-white/50 cursor-pointer" />
        </Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marzettimarcela@gmail.com&subject=Summer%20Party&body=Afiliado%20de%20Buona%20Vibra!">
          <EmailIcon className="mx-5 text-white scale-150 hover:text-white/50 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
