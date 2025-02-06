import { useDynamicSection } from "infinity-forge";
import { Button, Container, Error } from "infinity-forge";

import * as S from "./styles";

export function Parallax() {
  const { images, title, Section, description, jsonContent } =
    useDynamicSection<{
      linkUrl?: string;
      linkText?: string;
      linkIsExternal?: true | false;
    }>({
      refSection: "parallax",
      fields: {
        title: {},
        images: {
          multiple: false,
          sizeImageFile: "1920/600",
        },
        description: {},
      },

      customForm: {
        inputs: [
          [
            {
              name: "jsonContent.linkText",
              label: "Texto do Link",
              placeholder: "Digite o texto do link",
              InputComponent: "Input",
            },
          ],
          [
            {
              name: "jsonContent.linkUrl",
              label: "Url do Link",
              placeholder: "Digite a url do link",
              InputComponent: "Input",
            },
            {
              name: "jsonContent.linkIsExternal",
              label: "Abrir em uma nova aba?",
              InputComponent: "InputSwitch",
            },
          ],
        ],
      },
    });

  return (
    <Error name="Parallax">
      <Section>
        <S.Parallax
          style={{ backgroundImage: `url(${images ? images[0].url : ""})` }}
        >
          <Container>
            {title && (
              <h2
                className="font-48-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {description && (
              <p
                className="font-18-regular description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {jsonContent?.linkText && jsonContent?.linkUrl && (
              <Button
                text={jsonContent?.linkText}
                href={jsonContent?.linkUrl}
                target={jsonContent?.linkIsExternal ? "_blank" : "_self"}
                className="font-16-bold"
              />
            )}
          </Container>
        </S.Parallax>
      </Section>
    </Error>
  );
}
