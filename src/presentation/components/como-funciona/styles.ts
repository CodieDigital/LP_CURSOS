import styled from "styled-components";

export const ComoFunciona = styled("section")`
  background-color: ${({ theme }) => theme.black};

  .container {
    color: ${({ theme }) => theme.grey};
    text-align: center;

    display: flex;
    gap: 40px;
    align-items: center;
    flex-direction: column;

    > div {
      width: 100%;
    }
  }

  h2 {
    line-height: 1.25;
  }

  .image {
    width: 100%;
    max-width: 1446px;
    aspect-ratio: 1446/126;
  }

  @media only screen and (max-width: 1600px) {
    .container {
      gap: 30px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .image {
      width: 100%;
      max-width: 280px;
      aspect-ratio: 280/257;
    }

    a {
      max-width: 300px !important;
    }
  }
`;
