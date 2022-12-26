import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" type="any" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
