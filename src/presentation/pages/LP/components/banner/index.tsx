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

import { EnterButton } from "@/presentation";

import * as S from "./styles";

export function Banner() {
  const _window = useWindow();
  const headerHeight =
    useElementId({
      id: "header",
    })?.offsetHeight || 0;

  const { title, Section, images, description, jsonContent } =
    useDynamicSection<IJsonContent>(dynamicConfig);

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

                <EnterButton />
              </div>
            </div>

            <a href="#next-section" className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
              >
                <g id="arrows">
                  <path
                    id="Vector 1"
                    d="M1 1L16 11L31 1"
                    stroke={jsonContent?.button1Background}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector 2"
                    d="M1 11L16 21L31 11"
                    stroke={jsonContent?.button1Background}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </Container>
        </div>
      );
    },
  });

  return (
    <Section>
      <Error name="Banner">
        <S.Banner $botao2css={jsonContent?.button2Css}>
          <Carousel />
        </S.Banner>
        <div id="next-section" />
      </Error>
    </Section>
  );
}
