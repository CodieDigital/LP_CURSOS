import { DynamicSectionProps } from "infinity-forge";

export type IJsonContent = {
  button1Url: string;
  button1Text: string;
  button1Color: string;
  button1Background: string;
  button1IsExternal: string;
  image;
};

export const dynamicConfig: DynamicSectionProps = {
  refSection: "BannerHome",
  fields: {
    title: {},
    images: {},
    description: {},
    linkUrl: {
      label: "Botao Login(URL)",
      placeholder: "Redirecionar para...",
    },
    linkText: {
      label: "Botao Login(Texto)",
      placeholder: "Informe o texto do botão login",
    },
  },
  customForm: {
    button: { text: "Salvar" },
    inputs: [
      [
        {
          InputComponent: "InputSwitch",
          label: "Botão 1 - Abrir em uma nova aba?",
          name: "jsonContent.button1IsExternal",
        },
        {
          InputComponent: "Input",
          label: "Botão 1 - Texto",
          name: "jsonContent.button1Text",
          placeholder: "Informe o texto do botão 1",
        },
        {
          InputComponent: "Input",
          label: "Botão 1 - URL",
          name: "jsonContent.button1Url",
          placeholder: "Informe a URL do botão 1",
        },
        {
          InputComponent: "Input",
          label: "Botão 1 - Cor do texto",
          name: "jsonContent.button1Color",
          placeholder: "Informe a cor do texto do botão 1",
        },
        {
          InputComponent: "Input",
          label: "Botão 1 - Cor de fundo",
          name: "jsonContent.button1Background",
          placeholder: "Informe a cor de fundo do botão 1",
        },
      ],
    ],
  },
};
