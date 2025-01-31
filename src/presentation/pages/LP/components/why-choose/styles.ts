import styled from "styled-components";

export const WhyChoose = styled("section")`
  color: ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.black};

  h2 {
    text-align: center;
    line-height: 1.25;
    margin-bottom: 40px;
  }

  .cards {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    > div {
      padding: 50px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.tertiaryColor};

      .titles {
        display: flex;
        gap: 30px;

        .icon {
          width: 60px;
          aspect-ratio: 60/60;
          flex-shrink: 0;

          img {
            object-fit: contain;
          }
        }

        h3 {
          line-height: 1.25;
        }
      }

      .description {
        margin-top: 30px;
        line-height: 1.25;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .cards {
      > div {
        padding: 40px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    h2 {
      margin-bottom: 30px;
    }

    .cards {
      > div {
        padding: 30px;

        .titles {
          .icon {
            width: 50px;
          }
        }

        .description {
          margin-top: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .cards {
      > div {
        padding: 20px;

        .titles {
          .icon {
            width: 45px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);

      > div {
        .titles {
          .icon {
            width: 40px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .cards {
      gap: 20px;
      justify-content: center;
      grid-template-columns: repeat(1, minmax(0, 600px));

      > div {
        .titles {
          .icon {
            width: 35px;
          }
        }

        .description {
          margin-top: 15px;
        }
      }
    }
  }
`;
