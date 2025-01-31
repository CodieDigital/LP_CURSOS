import { useDynamicSection } from "infinity-forge";
import { Button, Container, Error, Icon, NextImage } from "infinity-forge";

import * as S from "./styles";

export type ImageTextProps = {
  hasButton?: boolean;
  direction?: "row" | "row-reverse";
  refSection: string;
  aspectRatio?: string;
  isGlobal?: boolean;
};

export function ImageText({
  isGlobal = false,
  hasButton = false,
  direction = "row",
  refSection,
  aspectRatio = "704/457",
}: ImageTextProps) {
  const { title, images, subtitle, Section, description, jsonContent } =
    useDynamicSection<{
      items: { title?: string; description?: string }[];
    }>({
      refSection,
      isGlobal,
      fields: {
        title: {},
        images: {
          sizeImageFile: aspectRatio,
          multiple: false,
        },
        subtitle: {},
        description: {},
      },
      customForm: {
        inputs: [
          [
            {
              name: "items",
              label: "Novo item",
              placeholder: "Item",
              gridColumns: 2,
              InputComponent: "InputManager",
              inputs: [
                [
                  {
                    InputComponent: "TextEditor",
                    name: "title",
                    label: "Título",
                  },
                ],
                [
                  {
                    InputComponent: "TextEditor",
                    name: "description",
                    label: "Descrição",
                  },
                ],
              ],
            },
          ],
        ],
      },
    });

  return (
    <Section>
      <S.ImageText
        className="spacing-y-100"
        $direction={direction}
        $aspectRatio={aspectRatio}
      >
        <Container>
          <div className="text">
            {subtitle && (
              <div
                className="subtitle font-18-bold"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {title && (
              <h2
                className="font-48-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {description && (
              <div
                className="description font-18-regular"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )}

            {Array.isArray(jsonContent?.items) &&
              jsonContent.items.length > 0 && (
                <ul>
                  {jsonContent.items.map((item, index) => (
                    <li key={index}>
                      <div className="title">
                        <Icon name="CheckListIcon" />

                        <h3
                          className="font-18-bold"
                          dangerouslySetInnerHTML={{
                            __html: item.title || "",
                          }}
                        />
                      </div>

                      <div
                        className="font-16-regular content"
                        dangerouslySetInnerHTML={{
                          __html: item.description || "",
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}

            {hasButton && (
              <div className="button">
                <Button
                  href="https://curso.raioxdaprova.com/"
                  text="Comece Agora!"
                  className="font-16-bold"
                  target="_blank"
                />
              </div>
            )}
          </div>

          {images && images[0]?.url && (
            <div className="image">
              <NextImage src={images[0]?.url} />
            </div>
          )}
        </Container>
      </S.ImageText>
    </Section>
  );
}
