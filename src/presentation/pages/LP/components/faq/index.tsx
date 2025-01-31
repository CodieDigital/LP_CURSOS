import { useDynamicSection } from "infinity-forge";
import { Accordion, Button, Container, Error } from "infinity-forge";

import * as S from "./styles";

export function Faq() {
  const { title, Section, jsonContent } = useDynamicSection<{
    items: { title: string; description: string }[];
  }>({
    isGlobal: true,
    refSection: "faq",
    customForm: {
      inputs: [
        [
          {
            name: "items",
            label: "Novo item",
            placeholder: "Item",
            gridColumns: 1,
            InputComponent: "InputManager",
            inputs: [
              [
                {
                  InputComponent: "Input",
                  name: "title",
                  label: "Pergunta",
                },
              ],
              [
                {
                  InputComponent: "TextEditor",
                  name: "description",
                  label: "Resposta",
                },
              ],
            ],
          },
        ],
      ],
    },
  });

  return (
    <Error name="Faq">
      <Section>
        <S.Faq className="spacing-y-100">
          <Container>
            <div className="text">
              <h2 className="font-48-bold">Perguntas Frequentes</h2>

              {Array.isArray(jsonContent?.items) &&
                jsonContent?.items.length > 0 && (
                  <div className="faq-list">
                    {jsonContent?.items.map((item, index) => (
                      <Accordion
                        key={index}
                        title={item.title || ""}
                        children={
                          <div
                            className="font-16-regular description"
                            dangerouslySetInnerHTML={{
                              __html: item.description || "",
                            }}
                          />
                        }
                      />
                    ))}
                  </div>
                )}
            </div>
          </Container>
        </S.Faq>
      </Section>
    </Error>
  );
}
