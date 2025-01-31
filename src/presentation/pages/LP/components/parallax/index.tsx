import { useDynamicSection } from "infinity-forge";
import { Button, Container, Error } from "infinity-forge";

import * as S from "./styles";

export function Parallax() {
  const { images, title, Section } = useDynamicSection({
    refSection: "parallax",
    fields: {
      title: {},
      images: {
        multiple: false,
        sizeImageFile: "1920/600",
      },
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
          </Container>
        </S.Parallax>
      </Section>
    </Error>
  );
}
