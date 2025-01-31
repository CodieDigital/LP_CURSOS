import { Error, useWindow, useCarousel } from "infinity-forge";

import * as S from "./styles";

export function Banner() {
  const _window = useWindow();

  const { Carousel } = useCarousel({
    items: [
      {
        imagem: "/images/LP/banner-pre-cadastro.png",
        imagemMobile: "/images/pre-cadastro/banner-mobile.png",
      },
    ],
    id: "banner",
    config: {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
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
        ></div>
      );
    },
  });

  return (
    <Error name="Banner">
      <S.Banner>
        <Carousel />
      </S.Banner>
      <div id="next-section" />
    </Error>
  );
}
