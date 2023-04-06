import Head from "next/head";
import React from "react";
import MercadoPago from "mercadopago";

const mp_checkout = () => {
  return (
    <>
      <Head>
        {/* Import Mercado Pago */}
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Head>
      <main>
        {/* Config credentials */}
        const mp = new MercadoPago(process.env.PUBLIC_KEY);
        {/* CardForm */}
        <form id="form-checkout" class="max-w-2xl mx-auto flex flex-col">
          <div
            id="form-checkout__cardNumber"
            class="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <div
            id="form-checkout__expirationDate"
            class="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <div
            id="form-checkout__securityCode"
            class="container h-4 border border-gray-400 rounded-sm p-1"
          ></div>
          <input
            type="text"
            id="form-checkout__cardholderName"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />
          <select
            id="form-checkout__issuer"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <select
            id="form-checkout__installments"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <select
            id="form-checkout__identificationType"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          ></select>
          <input
            type="text"
            id="form-checkout__identificationNumber"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />
          <input
            type="email"
            id="form-checkout__cardholderEmail"
            class="my-2 py-1 px-2 border border-gray-400 rounded-sm"
          />

          <button
            type="submit"
            id="form-checkout__submit"
            class="my-2 py-1 px-4 bg-blue-500 text-white rounded-sm"
          >
            Pagar
          </button>
          <progress value="0" class="progress-bar my-2"></progress>
        </form>
      </main>
    </>
  );
};

export default mp_checkout;
