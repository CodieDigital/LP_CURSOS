import styled from "styled-components";
import { ImageTextProps } from ".";

export const ImageText = styled("section")<{
  $direction: ImageTextProps["direction"];
  $aspectRatio: ImageTextProps["aspectRatio"];
}>`
  .container {
    color: ${({ theme }) => theme.grey};

    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: space-between;
  }

  h2,
  h3,
  p {
    line-height: 1.25;
  }

  .text {
    width: 100%;
    max-width: 704px;

    h2,
    ul,
    .description {
      & + * {
        margin-top: 40px;
      }
    }

    .description {
      line-height: 1.25;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;

      li {
        .title {
          display: flex;
          gap: 10px;
          align-items: center;

          & + * {
            margin-top: 10px;
          }

          svg {
            width: 20px;
            height: auto;
            fill: ${({ theme }) => theme.primaryColor};
          }
        }
      }
    }

    .button {
      width: fit-content;
    }
  }

  .image {
    width: 100%;
    max-width: 704px;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  }

  @media only screen and (max-width: 1600px) {
    .text {
      h2,
      ul,
      .description {
        & + * {
          margin-top: 30px;
        }
      }

      ul {
        gap: 25px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .text {
      h2,
      ul,
      .description {
        & + * {
          margin-top: 25px;
        }
      }

      ul {
        gap: 20px;

        li {
          .title {
            gap: 8px;

            svg {
              width: 15px;
            }
          }

          .content {
            gap: 8px;

            svg {
              width: 18px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .text {
      h2,
      ul,
      .description {
        & + * {
          margin-top: 20px;
        }
      }

      ul {
        gap: 15px;

        li {
          h3 {
            svg {
              width: 15px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      gap: 20px;
      flex-direction: column-reverse;
    }

    .text {
      br {
        display: none;
      }
    }
  }
`;
