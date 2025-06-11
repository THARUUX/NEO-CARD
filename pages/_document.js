import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts: Bruno Ace */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap"
          rel="stylesheet"
        />

        {/* Load stylesheets normally */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/kursor/dist/kursor.css"
        />
      </Head>
      <body className="antialiased bg-black">
        <Main />
        <NextScript />

        {/* ✅ Move scripts to body & use defer to avoid blocking */}
        <script
          src="https://animatedicons.co/scripts/embed-animated-icons.js"
          defer
        ></script>
        <script src="https://unpkg.com/kursor" defer></script>
      </body>
    </Html>
  );
}
