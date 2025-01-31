import styled from "styled-components";

export const Methodology = styled("section")`
  padding-top: 0 !important;
  color: ${({ theme }) => theme.grey};
  text-align: center;

  .text {
    margin-bottom: 40px;

    h2 {
      line-height: 1.25;

      & + .description {
        margin-top: 30px;
      }
    }
  }

  .cards {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    > div {
      display: flex;
      gap: 30px;
      align-items: center;
      flex-direction: column;

      padding: 50px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.grey100};

      .icon {
        width: 60px;
        aspect-ratio: 60/60;
      }

      h3 {
        line-height: 1.25;
      }

      .description {
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
    .text {
      margin-bottom: 30px;

      h2 {
        & + .description {
          margin-top: 20px;
        }
      }
    }

    .cards {
      > div {
        gap: 20px;
        padding: 30px;

        .icon {
          width: 50px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .cards {
      > div {
        padding: 20px;

        .icon {
          width: 45px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);

      > div {
        .icon {
          width: 40px;
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
        gap: 15px;

        .icon {
          width: 35px;
        }
      }
    }
  }
`;
