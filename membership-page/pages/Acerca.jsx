import React from "react";
import Image from "next/image";

const Acerca = () => {
  return (
    // container
    <div id="about" className="w-full h-auto m-auto p-6">
      {/* section title */}
      <h1 className="p-4 text-4xl italic font-bold text-center text-blue-800/80">
        Acerca de.
      </h1>

      {/* grid section --------------------------*/}
      <div className="flex flex-col items-center text-center md:flex md:flex-row">
        {/* me */}
        <div className="md:items-center p-2 md:mt-[-20px]">
          <div className="w-full md:text-center h-full">
            <Image
              width={300}
              height={300}
              src="/marcela-marzetti.jpg"
              alt="marcela marzetti"
              className="shadow-2xl rounded-full w-[200px] h-[100px] sm:h-[250px] sm:w-[650px] md:w-[2100px] object-cover border-none"
            />
            <h3 className="mt-3 font-semibold italic md:pb-5 text-2xl  text-blue-800/50">
              Marcela Marzetti
            </h3>
          </div>
        </div>

        {/* content */}
        <div className="flex-row md:flex md:text-start px-6">
          <p className="text-xl">
            ¡Bienvenido/a a mi página web! <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Mi nombre es Marcela Marzetti y soy una
            persona como tú, transitando esta experiencia humana aquí en la
            Tierra. Soy licenciada en administración de empresas y he dedicado
            gran parte de mi vida a gestionar negocios. Sin embargo, mi camino
            me llevó al yoga kundalini, una práctica que transformó mi vida y me
            permitió conectar con mi propia sabiduría interna y mi gurú interno.
            En estos tiempos de incertidumbre y cambios constantes, el yoga
            kundalini es una herramienta poderosa para gestionar nuestras
            energías y conectarnos con nuestro corazón y nuestra alma. A través
            de esta práctica, podemos activar nuestra magia interna y vivir en
            un estado de salud, felicidad, dicha, amor, gratitud, alegría,
            abundancia, paz y prosperidad. Mi intención es acompañarte en este
            camino de autodescubrimiento y ayudarte a conectar con tu propio
            gurú interno, esa sabiduría interna que te guía y te permite obtener
            tu auto-maestría. Juntos, podemos abrir la puerta al campo ilimitado
            de infinitas posibilidades y concretar todas tus intenciones para
            vivir en un estado de armonía. ¡Te invito a explorar mi página web y
            descubrir cómo puedo ayudarte en este camino de crecimiento
            personal!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
