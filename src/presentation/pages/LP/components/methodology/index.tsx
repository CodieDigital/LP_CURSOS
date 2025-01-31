import { useDynamicSection } from "infinity-forge";
import { Error, Container, NextImage, FileSystemType } from "infinity-forge";

import * as S from "./styles";

export function Methodology() {
  const { title, Section, description, jsonContent } = useDynamicSection<{
    items: {
      id: string;
      image: FileSystemType[];
      title: string;
      description: string;
    }[];
  }>({
    refSection: "methodology",
    fields: {
      title: {},
      description: {},
    },
    customForm: {
      inputs: [
        [
          {
            name: "items",
            gridColumns: 1,
            placeholder: "Item",
            InputComponent: "InputManager",
            inputs: [
              [
                {
                  name: "image",
                  label: "Imagem",
                  multiple: false,
                  isMultiple: false,
                  sizeImageFile: "60x60",
                  InputComponent: "InputFile",
                  enableMobileImage: false,
                  uploadFileVersion: "v2",
                },
              ],
              [
                {
                  label: "Titulo",
                  name: "title",
                  placeholder: "Digite o titulo",
                  InputComponent: "TextEditor",
                },
              ],
              [
                {
                  label: "Descrição",
                  name: "description",
                  placeholder: "Digite a descrição",
                  InputComponent: "TextEditor",
                },
              ],
            ],
          },
        ],
      ],
    },
  });

  return (
    <Error name="Methodology">
      <Section>
        <S.Methodology className="spacing-y-100">
          <Container>
            <div className="text">
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
            </div>

            {Array.isArray(jsonContent?.items) &&
              jsonContent?.items?.length > 0 && (
                <div className="cards">
                  {jsonContent?.items?.map((item) => (
                    <div key={item?.id}>
                      {item?.image?.length > 0 && (
                        <div className="icon">
                          <NextImage src={item?.image?.[0]?.url} />
                        </div>
                      )}

                      {item?.title && (
                        <h3
                          className="font-24-bold"
                          dangerouslySetInnerHTML={{ __html: item?.title }}
                        />
                      )}

                      {item?.description && (
                        <div
                          className="description font-18-regular"
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
          </Container>
        </S.Methodology>
      </Section>
    </Error>
  );
}
