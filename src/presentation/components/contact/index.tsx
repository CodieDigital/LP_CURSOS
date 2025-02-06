import {
  ContactJSON,
  useDynamicSection,
  DynamicSectionProps,
  Container,
  Error,
} from "infinity-forge";

import { FormContact } from "./form-contact";
import { DetailsContact } from "./details-contact";

import * as S from "./styles";

export function Contact() {
  const dynamicProps = {
    refSection: "ContactAtenaPages",
    isGlobal: true,
    customForm: {
      modal: {
        styles: {
          maxWidth: "98%",
        },
      },
      inputs: [
        [
          {
            name: "jsonContent.titleCss",
            InputComponent: "Input",
            label: "Título CSS",
          },
          {
            name: "jsonContent.inputName",
            InputComponent: "InputSwitch",
            label: "Input de nome",
          },
          {
            name: "jsonContent.inputEmail",
            InputComponent: "InputSwitch",
            label: "Input de email",
          },
          {
            name: "jsonContent.inputPhone",
            InputComponent: "InputSwitch",
            label: "Input de telefone",
          },
          {
            name: "jsonContent.inputDescription",
            InputComponent: "InputSwitch",
            label: "Input de descrição",
          },
        ],
        [
          {
            name: "jsonContent.messageProviderKey",
            InputComponent: "Input",
            label:
              'Refêrencia do formulário no mensage provider por exemplo se no message provider o caminho estiver https://mysite.com.br/mykey então neste campo deverá ser colocado o "mykey"',
          },
          {
            name: "jsonContent.recaptcha",
            InputComponent: "Input",
            label: "Recaptcha",
          },
        ],
        [
          {
            name: "items",
            InputComponent: "InputManager",
            inputs: [
              [
                { InputComponent: "Input", name: "titulo", label: "Título" },
                { InputComponent: "Input", name: "link", label: "Link" },
              ],
              [
                {
                  InputComponent: "InputSwitch",
                  name: "target",
                  label: "Abrir em nova aba",
                },
                { InputComponent: "SelectIcon", name: "icon", label: "Icone" },
              ],
              [{ InputComponent: "InputManager", name: "test" }],
            ],
          },
        ],
      ],
    },
    fields: {
      title: {},
      description: {},
      images: {
        disable: true,
      },
      linkText: {
        disable: true,
      },
      linkUrl: {
        disable: true,
      },
      videoUrl: {
        disable: true,
      },
    },
  } as DynamicSectionProps;

  const section = useDynamicSection<ContactJSON>(dynamicProps);

  return (
    <Error name="Contact">
      <section.Section>
        <S.Contact>
          <Container>
            <DetailsContact {...dynamicProps} />

            <FormContact {...dynamicProps} />
          </Container>
        </S.Contact>
      </section.Section>
    </Error>
  );
}
