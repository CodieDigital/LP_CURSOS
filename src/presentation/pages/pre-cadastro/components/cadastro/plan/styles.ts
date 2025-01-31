import styled from "styled-components";

export const Plan = styled("div")`
  width: 100%;
  max-width: 460px;

  color: ${({ theme }) => theme.grey};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey100};

  .titles {
    border-radius: 20px 20px 0 0;

    padding: 40px 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.grey};

    h2 {
      color: ${({ theme }) => theme.black};
      line-height: 1.25;
    }
  }

  .text {
    padding: 60px 60px 0;
    position: relative;

    ul {
      li {
        line-height: 2.5;
      }
    }

    .price_container {
      margin: 40px 7.5px -160px;
    }

    .price {
      padding: 20px;
      border-radius: 20px;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: ${({ theme }) => theme.primaryColor};

      > span {
        color: #000;
      }

      p {
        color: ${({ theme }) => theme.black};

        span {
          line-height: 1.4;
        }

        span:nth-child(2) {
          margin: 0 10px;
          line-height: 1.25;
        }
      }
    }
  }

  .center {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 20px;

    span {
      display: block;
    }
  }

  @media only screen and (max-width: 1600px) {
    .titles {
      padding: 30px 20px;
    }

    .text {
      padding: 50px 50px 0;

      .price_container {
        margin-bottom: -140px;
      }

      .price {
        padding: 15px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .titles {
      padding: 25px 20px;
    }

    .text {
      padding: 40px 40px 0;

      .price {
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .titles {
      padding: 20px;
    }

    .text {
      padding: 30px 30px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .titles {
      padding: 15px;
    }

    .text {
      padding: 15px 15px 0;

      .price_container {
        margin-bottom: -130px;
      }

      .price {
        p {
          span[class*="font-48"] {
            margin: 0 5px;
            font-size: 2.8rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .titles {
      padding: 10px;
    }

    .text {
      padding: 10px 10px 0;

      .price_container {
        margin: 0 7.5px 0;
      }

      .price {
        span[class*="font-48"] {
          font-size: 2.6rem;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .text {
      .price {
        span[class*="font-48"] {
          font-size: 2.4rem;
        }
      }
    }
  }
`;
