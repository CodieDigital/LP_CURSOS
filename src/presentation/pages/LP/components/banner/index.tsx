import {
  Error,
  Button,
  Container,
  useWindow,
  useCarousel,
} from "infinity-forge";
import * as S from "./styles";
import { useDynamicSection } from "infinity-forge";

export function Banner() {
  const _window = useWindow();

  const { Section, title, description, linkText, linkUrl, images } =
    useDynamicSection({
      refSection: "BannerHome",
      fields: {
        images: {},
        title: {},
        description: {},
        linkText: {},
        linkUrl: {},
      },
    });

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
            <div />

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
                <Button
                  text={linkText}
                  href={linkUrl}
                  target="_blank"
                  className="font-16-bold"
                />
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
