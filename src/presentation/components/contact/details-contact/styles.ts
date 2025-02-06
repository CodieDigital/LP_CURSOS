import { styled } from "styled-components";

export const DetailsContact = styled("div")<{ $titleCss?: string }>`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 80%;

  address {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .container-info .container-left {
    width: 80%;

    h2 {
      color: ${(p) => p.theme.tertiaryColor};
      ${(p) => p.$titleCss};
    }
  }

  .description {
    color: ${(p) => p.theme.grey};
  }

  .container-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${(p) => p.theme.primaryColor};
  }

  .link {
    text-decoration: none;
    color: ${(p) => p.theme.grey};
  }

  @media only screen and (max-width: 1200px) {
    gap: 15px;
  }

  @media only screen and (max-width: 900px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .container-info .container-left {
      width: 100%;
    }
  }
`;
