import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 drop-shadow-2xl">
      <div className="bg-login-image bg-cover bg-center h-screen grid place-items-center"></div>
      <div className="flex items-center justify-center flex-col m-auto p-2">
        <h3 className="text-3xl font-bold text-white">Se miembro</h3>
        <p className="text-white">comienza con tu experiencia.</p>
        <button className="drop-shadow-2xl mt-4 px-6 py-4 rounded-full bg-white hover:bg-blue-600 hover:text-white text-black">
          Registrate
        </button>
      </div>
    </div>
  );
};

export default Login;
