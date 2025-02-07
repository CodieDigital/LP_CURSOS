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

      > div:has(.content.isOpen) .arrow svg {
        transform: rotate(90deg);
      }

      > div {
        margin: 0;
        padding: 0;
        box-shadow: unset;
        background-color: transparent;
        border: none;

        .header {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.grey};
          text-align: left;
          padding: 10px 30px;
          gap: 10px;
          border-radius: 10px;
          background-color: ${({ $boxBackground }) => $boxBackground};
        }

        .arrow {
          width: auto;

          svg {
            fill: ${({ theme }) => theme.primaryColor};
            width: 30px;
            height: auto;
            transform: rotate(270deg);
          }
        }
      }

      .content {
        padding: 0 30px;
        background: transparent;

        &.isOpen {
          padding-top: 20px;

          .description {
            line-height: 1.4;
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

      .faq-list > div .header {
        font-size: 1.7rem;
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
          .header {
            padding: 10px 25px;
            font-size: 1.6rem;
          }

          .content {
            padding: 0 25px;

            &.isOpen {
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
          .header {
            padding: 10px 20px;
            font-size: 1.55rem;

            .arrow {
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
          .header {
            padding: 10px 20px;
            font-size: 1.5rem;
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

    .faq-list > div .header {
      font-size: 1.45rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .text {
      max-width: 600px;

      .faq-list {
        > div {
          .header {
            padding: 10px 15px;
            font-size: 1.4rem;

            .arrow {
              flex-shrink: 0;

              svg {
                width: 20px;
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
