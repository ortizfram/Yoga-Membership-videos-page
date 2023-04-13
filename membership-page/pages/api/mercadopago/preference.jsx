// pages/api/mercadopago/preference.jsx
const createPreference = async () => {
  try {
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          // seller access token
          Authorization:
            "Bearer TEST-1779011768934897-041012-0858edb8ab94293d5c84cae6ca6f9161-1349434284",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              title: "clase",
              quantity: 1,
              unit_price: 2000,
            },
          ],
          purpose: "wallet_purchase",
        }),
      }
    );
    const preference = await response.json();
    console.log(preference);
  } catch (error) {
    console.error(error);
  }
};
