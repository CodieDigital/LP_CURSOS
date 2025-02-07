import styled from "styled-components";

interface IOutPartnersStyledProps {
  $length: number;
  $titleColor?: string;
  $backgroundCard?: string;
  $backgroundSection?: string;
}

export const OurPartners = styled("section")<IOutPartnersStyledProps>`
  padding-top: 0 !important;
  background-color: ${(p) => p.$backgroundSection || p.theme.black};

  h2 {
    text-align: center;
    line-height: 1.25;
    margin-bottom: 40px;
    color: ${(p) => p.$titleColor || p.theme.grey};
  }

  .card {
    padding: 15px;
    border-radius: 20px;
    background-color: ${(p) => p.$backgroundCard || p.theme.grey};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      aspect-ratio: 16/9;
    }
  }

  .swiper-pagination {
    display: ${(p) => (p.$length > 6 ? "flex" : "none")};

    &-bullet {
      background-color: #fff;
    }
  }

  @media only screen and (max-width: 1600px) {
    h2 {
      margin-bottom: 35px;
    }
  }

  @media only screen and (max-width: 1400px) {
    h2 {
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1200px) {
    h2 {
      margin-bottom: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      margin-bottom: 20px;
    }

    .card {
      padding: 10px;
    }

    .swiper-pagination {
      display: ${(p) => (p.$length > 5 ? "flex" : "none")};
    }
  }

  @media only screen and (max-width: 900px) {
    .swiper-pagination {
      display: ${(p) => (p.$length > 4 ? "flex" : "none")};
    }
  }

  @media only screen and (max-width: 800px) {
    .swiper-pagination {
      display: ${(p) => (p.$length > 3 ? "flex" : "none")};
    }
  }

  @media only screen and (max-width: 550px) {
    .swiper-pagination {
      display: ${(p) => (p.$length > 2 ? "flex" : "none")};
    }
  }
`;
