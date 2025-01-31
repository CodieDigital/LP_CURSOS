import { InfinityForgeProvidersProps } from "infinity-forge";
import { theme } from "./theme";
import { ButtonStyles } from "./button";

export const InfinityForgeProps: Omit<InfinityForgeProvidersProps, "children"> =
  {
    theme,
    auth: {
      roles: { Colaborador: {} },
    },
    Configurations: {
      poweredBy: {
        name: "Codie",
        link: "https://codie.com.br/",
      },
      notification: {
        enable: false,
      },
      menu: {
        mode: "OpenedMenu",
      },
      styles: {
        Button: ButtonStyles,
      },
    },
  };
