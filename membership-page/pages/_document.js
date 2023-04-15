import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta charset="UTF-8" />
      <Head />
      <body>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
