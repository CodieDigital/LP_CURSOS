import { useDynamicSection } from "infinity-forge";
import { Error, Container, NextImage, FileSystemType } from "infinity-forge";

import * as S from "./styles";

export function WhyChoose() {
  const { title, Section, jsonContent } = useDynamicSection<{
    items: {
      id: string;
      image: FileSystemType[];
      title: string;
      description: string;
    }[];
  }>({
    refSection: "why-choose",
    fields: {
      title: {},
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
    <Error name="WhyChoose">
      <Section>
        <S.WhyChoose className="spacing-y-100">
          <Container>
            {title && (
              <h2
                className="font-48-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {Array.isArray(jsonContent?.items) &&
              jsonContent?.items?.length > 0 && (
                <div className="cards">
                  {jsonContent?.items?.map((item) => (
                    <div key={item?.id}>
                      <div className="titles">
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
                      </div>

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
        </S.WhyChoose>
      </Section>
    </Error>
  );
}
