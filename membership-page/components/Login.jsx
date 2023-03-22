import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 drop-shadow-2xl">
      <div className="bg-login-image bg-cover bg-center h-screen grid place-items-center"></div>
      <div className="flex items-center justify-center flex-col m-auto p-2">
        <h3 className="text-6xl font-bold text-white">Se miembro</h3>
        <p className="text-white">comienza con tu experiencia.</p>
        <div className="flex gap-4 cursor-pointer drop-shadow-2xl mt-4 px-6 p-4 rounded-[6px] bg-white  text-black">
          <FcGoogle className="text-[30px]" />
          Registrate
        </div>
      </div>
    </div>
  );
};

export default Login;
