// components/mercadopago/checkout.jsx
import Head from "next/head";

const PUBLIC_KEY = process.env.PUBLIC_KEY;

export default function CheckoutPage() {
  return (
    <div>
      <Head>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Head>
      <div className="cho-container"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              const mp = new MercadoPago('${PUBLIC_KEY}');
              mp.checkout({
                preference: {
                  id: 'YOUR_PREFERENCE_ID'
                },
                render: {
                  container: '.cho-container',
                  label: 'Pagar com Mercado Pago',
                  type: 'wallet',
                }
              });
            `,
        }}
      ></script>
    </div>
  );
}
