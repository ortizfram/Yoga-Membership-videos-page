// components/MercadoPagoButton.js
import React, { useEffect } from "react";

const MercadoPagoButton = ({ preapprovalPlanId }) => {
  useEffect(() => {
    function $MPC_load() {
      window.$MPC_loaded !== true &&
        (function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            document.location.protocol +
            "//secure.mlstatic.com/mptools/render.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        })();
    }

    window.$MPC_loaded !== true
      ? window.attachEvent
        ? window.attachEvent("onload", $MPC_load)
        : window.addEventListener("load", $MPC_load, false)
      : null;
  }, []);

  return (
    <div>
      <a
        mp-mode="dftl"
        href={`https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=${preapprovalPlanId}`}
        name="MP-payButton"
        className="justify-center bg-blue-500 text-white py-2 px-6 rounded-md flex text-center"
      >
        Pagar con Mercado Pago
      </a>
    </div>
  );
};

export default MercadoPagoButton;
