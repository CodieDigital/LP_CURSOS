import {
  Error,
  Button,
  Container,
  useWindow,
  useCarousel,
  useDynamicSection,
  useElementId,
} from "infinity-forge";

import { dynamicConfig, IJsonContent } from "./dynamic-config";

import * as S from "./styles";

export function Banner() {
  const _window = useWindow();
  const headerHeight =
    useElementId({
      id: "header",
    })?.offsetHeight || 0;

  const {
    title,
    Section,
    images,
    linkUrl,
    linkText,
    description,
    jsonContent,
  } = useDynamicSection<IJsonContent>(dynamicConfig);

  const { Carousel } = useCarousel({
    items: [
      {
        imagem: images?.[0]?.url,
        imagemMobile: images?.[0]?.mobile?.[0]?.url,
      },
    ],
    id: "banner",
    config: {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    },
    Component: function ({ imagem, imagemMobile }) {
      return (
        <div
          style={{
            backgroundImage: `url(${
              imagemMobile && _window?.innerWidth <= 768 ? imagemMobile : imagem
            })`,
          }}
          className="banner-slide"
        >
          <Container>
            <div style={{ height: `${headerHeight}px` }} />

            <div className="text">
              {title && (
                <h1
                  className="font-50-bold"
                  dangerouslySetInnerHTML={{ __html: title || "" }}
                />
              )}

              {description && (
                <p
                  className="font-18-regular"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              <div className="buttons">
                {jsonContent?.button1Url && (
                  <Button
                    text={jsonContent?.button1Text}
                    href={jsonContent?.button1Url}
                    target={jsonContent?.button1IsExternal ? "_blank" : "_self"}
                    className="font-16-bold"
                    style={{
                      color: jsonContent?.button1Color,
                      backgroundColor: jsonContent?.button1Background,
                    }}
                  />
                )}

                {(linkText || linkUrl) && (
                  <Button
                    text={linkText}
                    href={linkUrl}
                    target="_blank"
                    className="font-16-bold"
                    svg="IconUserNoBg"
                  />
                )}
              </div>
            </div>

            <a href="#next-section" className="arrow">
              <img src="/images/LP/arrow.gif" />
            </a>
          </Container>
        </div>
      );
    },
  });

  return (
    <Section>
      <Error name="Banner">
        <S.Banner>
          <Carousel />
        </S.Banner>
        <div id="next-section" />
      </Error>
    </Section>
  );
}
