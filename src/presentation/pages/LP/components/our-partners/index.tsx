import Link from "next/link";

import {
  Error,
  Container,
  useCarousel,
  useDynamicSection,
} from "infinity-forge";

import { carouselConfig } from "./carousel-config";
import { dynamicCustom, IJSON } from "./dynamic-custom";

import * as S from "./styles";

export function OurPartners() {
  const { Section, jsonContent, title } = useDynamicSection<IJSON>({
    refSection: "OurPartners",
    isGlobal: true,
    fields: {
      title: {},
    },
    customForm: {
      inputs: dynamicCustom,
    },
  });

  const { Carousel } = useCarousel({
    id: "our-partners",
    Component: Card,
    items: jsonContent?.items || [],
    config: carouselConfig,
  });

  const styles = {
    $titleColor: jsonContent?.titleColor,
    $length: jsonContent?.items?.length || 0,
    $backgroundCard: jsonContent?.backgroundCard,
    $backgroundSection: jsonContent?.backgroundSection,
  };

  return (
    <Error name="OurPartners">
      <Section>
        <S.OurPartners {...styles} className="spacing-y-100">
          <Container>
            {title && (
              <h2
                className="title font-48-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            <Carousel />
          </Container>
        </S.OurPartners>
      </Section>
    </Error>
  );
}

function Card(props: IJSON["items"][0]) {
  if (props.url) {
    return (
      <Link href={props.url} target="_blank" className="card">
        <img src={props.image[0].url} alt={props.id} />
      </Link>
    );
  }

  return (
    <div className="card">
      <img src={props.image[0].url} alt={props.id} />
    </div>
  );
}
