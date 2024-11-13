import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@/shared/lib/styles";

const Document = () => (
  <Html>
    {/* @ts-ignore */}
    <Head>
      {/* eslint-disable-next-line */}
      <link rel="stylesheet" href="/assets/fonts.css" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(98899550, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });`,
        }}
      />

      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/98899550"
            style={{ position: "absolute", left: -9999 }}
            alt=""
          />
        </div>
      </noscript>
    </Head>
    <body>
      <Main />
      {/* @ts-ignore */}
      <NextScript />
    </body>
  </Html>
);

export default Document;
