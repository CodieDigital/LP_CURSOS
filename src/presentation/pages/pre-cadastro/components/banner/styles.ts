import styled from "styled-components";

export const Banner = styled("section")`
  .banner-slide {
    width: 100%;
    aspect-ratio: 1920/639;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 768px) {
    .banner-slide {
      aspect-ratio: 600/400;
    }
  }
`;
