import Link from "next/link";
import styled from "styled-components";

export const Logo = styled(Link)`
  width: 100%;
  display: flex;
  max-width: 187px;
  aspect-ratio: 187/60;

  img {
    object-fit: contain;
  }

  @media only screen and (max-width: 1600px) {
    max-width: 170px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 150px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 140px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 96px;
  }
`;
