import { FileSystemType, useDynamicSection } from "infinity-forge";

export type IConfigurationsTheme = {
  primaryColor: string;
  darkColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  buttonColor: string;
  inputColor: string;
  inputBorderColor: string;
  inputBackgroundColor: string;
  buttonBackgroundColor: string;
};

export type Configurations = {
  headerBackground?: string;
  footerBackground?: string;
  logo: FileSystemType[];
  isNetflix: boolean;
  pixelFacebook?: string;
  loginUrl?: string;
  subscriptionPrice?: string;
  pageTitle?: string;

  favicon?: FileSystemType[];

  whatsappNumber?: string;
  whatsappMessage?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
  youtube?: string;
} & IConfigurationsTheme;

export function useConfigurations() {
  return useDynamicSection<Configurations>({
    refSection: "configurations",
    isGlobal: true,
    customForm: {
      button: { text: "Salvar" },
      inputs: [
        [
          {
            InputComponent: "Input",
            label: "Título da página",
            name: "jsonContent.pageTitle",
          },
          {
            InputComponent: "Input",
            label: "Cor de fundo do Header",
            name: "jsonContent.headerBackground",
          },
          {
            InputComponent: "Input",
            label: "Cor de fundo do Footer",
            name: "jsonContent.footerBackground",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Login URL",
            name: "jsonContent.loginUrl",
          },
        ],
        [
          {
            InputComponent: "InputFile",
            name: "jsonContent.logo",
            label: "Logo",
            upload: { version: "v2" },
          },
          {
            InputComponent: "InputFile",
            name: "jsonContent.favicon",
            label: "Favicon",
            upload: { version: "v2" },
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Cor primária",
            name: "jsonContent.primaryColor",
          },
          {
            InputComponent: "Input",
            label: "Cor secundária",
            name: "jsonContent.secondaryColor",
          },
          {
            InputComponent: "Input",
            label: "Cor terciária",
            name: "jsonContent.tertiaryColor",
          },
        ],
        [
          {
            InputComponent: "InputSwitch",
            label: "Modelo netflix",
            name: "jsonContent.isNetflix",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Facebook Pixel",
            name: "jsonContent.pixelFacebook",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Cor da borda do input",
            name: "jsonContent.inputBorderColor",
          },
          {
            InputComponent: "Input",
            label: "Cor de fundo do input",
            name: "jsonContent.inputBackgroundColor",
          },
          {
            InputComponent: "Input",
            label: "Cor do texto do input",
            name: "jsonContent.inputColor",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Valor da mensalidade",
            name: "jsonContent.subscriptionPrice",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Cor do texto dos botões",
            name: "jsonContent.buttonColor",
          },
          {
            InputComponent: "Input",
            label: "Cor de fundo dos botões",
            name: "jsonContent.buttonBackgroundColor",
          },
        ],
        [
          {
            InputComponent: "InputMask",
            label: "Número de Whatsapp",
            name: "jsonContent.whatsappNumber",
            mask: "(__) _____-____",
            placeholder: "(00) 00000-0000",
          },
          {
            InputComponent: "Input",
            label: "Mensagem de Whatsapp",
            name: "jsonContent.whatsappMessage",
            placeholder: "Informe a mensagem de Whatsapp",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Instagram",
            name: "jsonContent.instagram",
            placeholder: "Informe o link do Instagram",
          },
          {
            InputComponent: "Input",
            label: "Facebook",
            name: "jsonContent.facebook",
            placeholder: "Informe o link do Facebook",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Tiktok",
            name: "jsonContent.tiktok",
            placeholder: "Informe o link do Tiktok",
          },
          {
            InputComponent: "Input",
            label: "Linkedin",
            name: "jsonContent.linkedin",
            placeholder: "Informe o link do Linkedin",
          },
        ],
        [
          {
            InputComponent: "Input",
            label: "Youtube",
            name: "jsonContent.youtube",
            placeholder: "Informe o link do Youtube",
          },
        ],
      ],
    },
  });
}

export function ConfigurationComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Section } = useConfigurations();
  return <Section>{children}</Section>;
}
