import { FileSystemType, useDynamicSection } from "infinity-forge";

export type Configurations = {
  primaryColor: string;
  darkColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  logo: FileSystemType[];
  isNetflix: boolean;
  pixelFacebook?: string;
  inputBorderColor: string;
  inputBackgroundColor: string;
  inputColor: string;
  subscriptionPrice?: string;
  buttonColor: string;
  buttonBackgroundColor: string;
  favicon?: FileSystemType[];
};

export function useConfigurations() {
  return useDynamicSection<Configurations>({
    refSection: "configurations",
    isGlobal: true,
    customForm: {
      button: { text: "Salvar" },
      inputs: [
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
