import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@/shared/lib/styles";

const Document = () => (
  <Html>
    <Head>
      {/* eslint-disable-next-line */}
      <link rel="stylesheet" href="/assets/fonts.css" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
