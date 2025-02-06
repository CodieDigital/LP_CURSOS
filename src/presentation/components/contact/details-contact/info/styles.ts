import { styled } from "styled-components";

export const Info = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .container-left {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .container-right {
    width: 45%;

    .image {
      height: 100%;

      div {
        border-radius: 1rem;
      }
    }
  }

  .container-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .container-title .subtitle {
    color: ${(p) => p.theme.tertiaryColor};

    p {
      color: currentColor;
    }
  }

  h2 {
    line-height: 1.16;
    color: ${(p) => p.theme.darkColor};
  }

  .description {
    color: ${(p) => p.theme.sixthColor};

    strong {
      font-weight: 700;
    }

    br {
      content: "";
      display: block;
      margin: 0.75rem 0;
    }
  }

  @media only screen and (max-width: 1600px) {
    align-items: center;

    .container-left {
      width: 46%;
    }

    .container-right {
      width: 50%;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container-left {
      gap: 3rem;
    }

    .container-title {
      gap: 1.5rem;
    }
  }

  @media only screen and (max-width: 1150px) and (min-width: 1025px) {
    h2 {
      font-size: 3.6rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 4vh;

    .container-left,
    .container-right {
      width: 100%;
    }

    h2 {
      width: 100%;
    }

    .container-right,
    .image {
      display: flex;
      justify-content: start;
    }

    .image {
      width: 80%;

      div {
        width: 100%;
      }
    }

    p br {
      margin: 0.5rem 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 100%;
    }
  }

  @media only screen and (max-width: 450px) {
    .container-left {
      gap: 2rem;
    }
  }
`;
