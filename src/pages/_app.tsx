import { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { phone, DynamicSection, InfinityForgeProviders } from "infinity-forge";

import {
  GlobalStyles,
  Configurations,
  InfinityForgeProps,
  ConfigurationComponent,
} from "@/presentation";

import "infinity-forge/dist/infinity-forge.css";

export default function App(ctx) {
  const initialConfigurations = ctx?.pageProps ? ctx?.pageProps?.sections?.find(
    (section) => section?.ref === "global_configurations"
  )?.jsonContent  : {};

  console.log(initialConfigurations)

  const router = useRouter();
  const [configurations] = useState<Configurations>(
    initialConfigurations ? JSON.parse(
      initialConfigurations
    ) : undefined
  );

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
      atena={{ ...ctx?.pageProps, roles: ["administradorMaster"] }}
      i18n={{ roleToEditLanguage: ["administradorMaster"] }}
      theme={{
        ...InfinityForgeProps.theme,
        darkColor: configurations?.darkColor || "#000",
        buttonColor: configurations?.buttonColor,
        primaryColor: configurations?.primaryColor || "#000",
        tertiaryColor: configurations?.tertiaryColor || "#000",
        secondaryColor: configurations?.secondaryColor || "#000",
        buttonBackgroundColor: configurations?.buttonBackgroundColor,
      }}
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
      <ConfigurationComponent>
        <GlobalStyles $configurations={configurations} />
        <ctx.Component {...ctx?.pageProps} />
      </ConfigurationComponent>
    </InfinityForgeProviders>
  );
}
