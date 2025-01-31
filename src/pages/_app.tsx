import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { InfinityForgeProviders, phone } from "infinity-forge";

import { GlobalStyles, InfinityForgeProps } from "@/presentation";

import "infinity-forge/dist/infinity-forge.css";

export default function App({ pageProps, Component }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1245127063575041");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  console.log(pageProps)

  return (
    <InfinityForgeProviders
      {...InfinityForgeProps}
      siteConfigurations={{
        whatsappfixo: true,
        whatsapp: phone.whatsapp.generateWhatsappUrl({
          phoneNumber: "45999645572",
          message: "Olá, gostaria de mais informações sobre o curso",
        }),
      }}

      atena={{...pageProps, roles: ["PowerUser"]}}
    >
      <Head>
        <title>Raiox da prova</title>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1245127063575041&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>


        <GlobalStyles />
        <Component {...pageProps} />
    
    </InfinityForgeProviders>
  );
}
