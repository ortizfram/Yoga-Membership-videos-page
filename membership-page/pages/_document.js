import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta charSet="UTF-8" />
      <Head />
      <body>
        <script async src="https://sdk.mercadopago.com/js/v2"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
