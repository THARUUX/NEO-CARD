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
        <script src="https://animatedicons.co/scripts/embed-animated-icons.js"></script>
            <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
      </Head>
      <body className="antialiased bg-black">
        <Main />
        <NextScript />
      </body>
          <script src="https://unpkg.com/kursor"></script>

    </Html>
  );
}
