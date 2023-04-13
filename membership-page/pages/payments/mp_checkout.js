import Head from "next/head";
import React, { useEffect } from "react";
import MercadoPago from "mercadopago";

const mp_checkout = () => {
  useEffect(() => {
    const mp = new MercadoPago(process.env.PUBLIC_KEY);
    // Load MercadoPago SDK asynchronously to avoid blocking the rendering process
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>MercadoPago Checkout</title>
      </Head>
      <main>
        <form id="form-checkout" className="max-w-2xl mx-auto flex flex-col">
          <div
            id="form-checkout__cardNumber"
            className="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <div
            id="form-checkout__expirationDate"
            className="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <div
            id="form-checkout__securityCode"
            className="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <input
            type="text"
            id="form-checkout__cardholderName"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />
          <select
            id="form-checkout__issuer"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <select
            id="form-checkout__installments"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <select
            id="form-checkout__identificationType"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <input
            type="text"
            id="form-checkout__identificationNumber"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />
          <input
            type="email"
            id="form-checkout__cardholderEmail"
            className="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />

          <button
            type="submit"
            id="form-checkout__submit"
            className="my-2 py-1 px-4 bg-blue-500 text-white rounded-sm"
          >
            Pagar
          </button>
          <progress value="0" className="progress-bar my-2"></progress>
        </form>
      </main>
    </>
  );
};

export default mp_checkout;
