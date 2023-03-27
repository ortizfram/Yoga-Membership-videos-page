import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="m-auto grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 drop-shadow-2xl">
      {/* bg-login-image */}
      <div className="relative bg-login-image bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-extrabold">
          <h3 className="text-xl font-thin">Kundalini Marcela.</h3>
          <h1 className="text-2xl sm:text-6xl">Kundalini</h1>
          <h3 className="text-2xl">para la vida.</h3>

          {/* scroll down arrow */}
          <div className="block md:hidden absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.354 14.354L5.707 9.707a.999.999 0 111.414-1.414L10 12.586l2.879-2.879a.999.999 0 111.414 1.414l-4.647 4.647a.999.999 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* register */}
      <div
        onClick={() => signIn("google")}
        className="flex items-center justify-center flex-col m-auto p-8"
      >
        <h3 className="text-2xl sm:text-6xl font-bold text-white">
          Sé miembro
        </h3>
        <p className="text-white">comienza con tu experiencia.</p>
        <div className="flex gap-4 cursor-pointer drop-shadow-2xl mt-4 px-6 p-4 rounded-[6px] bg-white text-black">
          <FcGoogle className="text-[30px]" />
          Registrate
        </div>
      </div>
    </div>
  );
};

export default Login;
