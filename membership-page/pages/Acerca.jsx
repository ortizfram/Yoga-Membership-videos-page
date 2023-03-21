import React from "react";

const Acerca = () => {
  return (
    // container
    <div className="w-full h-[50vh] p-6">
      {/* section title */}
      <h1 className="p-4 text-2xl italic font-bold text-center text-blue-800/80">
        Acerca de.
      </h1>

      {/* grid section --------------------------*/}
      <div className="flex flex-col items-center text-center md:flex md:flex-row ">
        {/* me */}
        <div className="md:items-center p-2 md:mt-[-20px]">
          <div className="w-full md:text-center">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQFNTPDXEWK_7A/profile-displayphoto-shrink_200_200/0/1616874347477?e=1683763200&v=beta&t=lBcPfILTA1Iw2Ydns-W0VRGxHb6t8kHUMGTyGM2xtS0"
              alt="..."
              className="shadow-2xl rounded-full h-auto border-none md:w-auto md:max-w-none"
            />
            <h3 className="mt-3 font-semibold italic md:pb-5">
              Marcela Marzetti
            </h3>
          </div>
        </div>

        {/* content */}
        <div className="p-6 flex-row md:flex md:text-start md:p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            consequuntur iusto. Temporibus amet sapiente ea. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Consequatur cumque, enim eum
            sint illo necessitatibus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
