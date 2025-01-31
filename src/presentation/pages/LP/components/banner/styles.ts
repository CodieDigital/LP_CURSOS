import styled from "styled-components";

export const Banner = styled("section")`
  .banner-slide {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    min-height: 90.74vh;
  }

  .container {
    padding: 30px 15px;
    min-height: inherit;

    display: flex;

    flex-direction: column;
    justify-content: space-between;
  }

  .text {
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.grey};

    width: 100%;
    max-width: 582px;

    h1 {
      line-height: 1.2;
    }

    > p {
      margin-top: 40px;
      line-height: 1.25;

      & + * {
        margin-top: 40px;
      }
    }

    .buttons {
      display: flex;
      gap: 16px;
      align-items: center;

      a {
        color: ${({ theme }) => theme.primaryColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
        background-color: transparent;
      }
    }
  }

  .arrow {
    transform: rotate(-90deg);

    display: flex;

    width: 100%;
    max-width: 60px;

    img {
      transition: 0.3s;
      width: inherit;
      max-width: inherit;
      aspect-ratio: 60/60;
    }

    &:hover {
      img {
        opacity: 0.7;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .banner-slide {
      min-height: 80.74vh;
    }

    .text {
      > p,
      > P + * {
        margin-top: 30px;
      }
    }

    .arrow {
      max-width: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .banner-slide {
      min-height: 80.74vh;
    }

    .arrow {
      max-width: 50px;
    }

    .text {
      > p,
      > P + * {
        margin-top: 25px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .arrow {
      max-width: 40px;
    }

    .text {
      max-width: 450px;

      > p,
      > P + * {
        margin-top: 20px;
      }
    }

    .buttons {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-slide {
      min-height: 71.3vh;
    }

    .container {
      padding: 20px 15px;
    }

    .arrow {
      max-width: 30px;
    }

    .text {
      max-width: 390px;

      > p {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .text {
      max-width: 350px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      align-items: center;
      justify-content: flex-start;
    }

    .text {
      max-width: 520px;
      text-align: center;
      align-items: center;
      margin-bottom: 20px;

      > p {
        margin-top: 20px;

        & + * {
          margin-top: 20px;
        }
      }
    }
  }
`;
