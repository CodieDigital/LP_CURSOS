import styled from "styled-components";

export const Faq = styled("section")<{ $boxBackground?: string }>`
  .text {
    color: ${({ theme }) => theme.grey};
    margin: 0 auto;
    max-width: 950px;

    > h2 {
      text-align: center;
      line-height: 1.25;
      margin-bottom: 70px;
    }

    .faq-list {
      display: flex;
      gap: 20px;
      flex-direction: column;

      > div {
        margin: 0;
        padding: 0;
        box-shadow: unset;
        background-color: transparent;

        > button {
          gap: 10px;
          padding: 20px 30px;
          border-radius: 10px;
          background-color: ${({ $boxBackground }) => $boxBackground};

          h2 {
            color: ${({ theme }) => theme.grey};
            text-align: left;
          }

          .actions {
            svg {
              fill: ${({ theme }) => theme.primaryColor};
              width: 20px;
              height: auto;
            }
          }
        }

        .content {
          padding: 0 30px;

          &.show {
            padding-top: 20px;

            .description {
              line-height: 1.4;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .text {
      max-width: 900px;

      > h2 {
        margin-bottom: 60px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .text {
      max-width: 850px;

      > h2 {
        margin-bottom: 40px;
      }

      .faq-list {
        > div {
          > button {
            padding: 15px 25px;
          }

          .content {
            padding: 0 25px;

            &.show {
              padding-top: 15px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .text {
      max-width: 800px;

      > h2 {
        margin-bottom: 20px;
      }

      .faq-list {
        > div {
          > button {
            padding: 15px 20px;

            .actions {
              svg {
                width: 18px;
              }
            }
          }

          .content {
            padding: 0 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .text {
      max-width: 800px;

      > h2 {
        margin-bottom: 20px;
      }

      .faq-list {
        > div {
          > button {
            padding: 15px 20px;
          }

          .content {
            padding: 0 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .text {
      max-width: 700px;
    }
  }

  @media only screen and (max-width: 768px) {
    .text {
      max-width: 600px;

      .faq-list {
        > div {
          > button {
            padding: 15px;

            .actions {
              svg {
                width: 15px;
              }
            }
          }

          .content {
            padding: 0 15px;
          }
        }
      }
    }
  }
`;
