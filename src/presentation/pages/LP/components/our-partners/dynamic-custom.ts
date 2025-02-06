import { FileSystemType, InputPropsDynamic } from "infinity-forge";

export interface IJSON {
  titleColor?: string;
  backgroundCard?: string;
  backgroundSection?: string;
  items: {
    id: string;
    url: string;
    image: FileSystemType[];
  }[];
}

export const dynamicCustom: InputPropsDynamic<any>[][] = [
  [
    {
      name: "jsonContent.titleColor",
      label: "Cor do Título",
      placeholder: "#000",
      InputComponent: "Input",
    },
  ],
  [
    {
      name: "jsonContent.backgroundSection",
      label: "Cor de fundo",
      placeholder: "#000",
      InputComponent: "Input",
    },
  ],
  [
    {
      name: "jsonContent.backgroundCard",
      label: "Cor de fundo dos items",
      placeholder: "#000",
      InputComponent: "Input",
    },
  ],
  [
    {
      name: "items",
      placeholder: "Marca",
      InputComponent: "InputManager",
      label: "Adicione mais um marca",
      gridColumns: 2,
      inputs: [
        [
          {
            name: "url",
            label: "Link",
            placeholder: "Insira o link",
            InputComponent: "Input",
          },
        ],
        [
          {
            label: "Imagem",
            name: "image",
            sizeImageFile: "135x90",
            upload: {
              version: "v2",
            },
            InputComponent: "InputFile",
          },
        ],
      ],
    },
  ],
];
