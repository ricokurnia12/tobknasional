import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="TOBK NASIONAL 2023 | Ganesha Operation ">
        <title>TOBK NASIONAL 2024 | Ganesha Operation </title>
        <Script
          id="gtm-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-GFBCTCXQD2"
        />
        <script
          id="gtm-config"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-GFBCTCXQD2" ,{page_path: window.location.pathname,});
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
