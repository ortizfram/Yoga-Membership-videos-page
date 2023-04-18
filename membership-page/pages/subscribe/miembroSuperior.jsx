import React from "react";
import MercadoPagoButton from "../../components/MercadoPagoButton.js";

const miembroSuperior = () => {
  return (
    <div className="relative text-center flex flex-col items-center h-screen justify-center">
      <div class=" absolute inset-0 bg-gradient-to-br from-purple-700 to-pink-500 to-orange-400 opacity-60 blur-md"></div>
      <div class="drop-shadow-4xl relative z-10 bg-white/30 backdrop-blur-md p-8 rounded-lg">
        <div className="mb-5 ">
          <h3 className="text-xl text-slate-500">Plan Mensual</h3>
          <h1 className="text-4xl text-white font-bold">Miembro Superior</h1>
        </div>
        <ul className=" text-slate-600">
          <li>
            <p>Desbloquea Talleres</p>
          </li>
          <li>
            <p>Medis cuando quieras</p>
          </li>
          <li>
            <p>Desbloquea Talleres</p>
          </li>
          <li>
            <p>Desbloquea Talleres</p>
          </li>
          <li>
            <p>Desbloquea Talleres</p>
          </li>
        </ul>
        <div className="mt-8">
          <MercadoPagoButton preapprovalPlanId="2c9380848774cf5e018775a33f280034" />
        </div>
      </div>
    </div>
  );
};

export default miembroSuperior;
