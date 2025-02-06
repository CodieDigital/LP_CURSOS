import styled from "styled-components";

export const Footer = styled("footer")`
  background-color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    padding: 80px 15px;
  }

  .buttons {
    display: flex;
    gap: 16px;
    align-items: center;

    a {
      color: ${({ theme }) => theme.buttonColor};
      border: 1px solid ${({ theme }) => theme.primaryColor};
    }

    .enter-button {
      color: ${({ theme }) => theme.primaryColor};
      background-color: transparent;
    }
  }

  .social {
    display: flex;
    gap: 30px;

    a {
      transition: 0.3s ease-in-out;
      width: fit-content;
      height: fit-content;

      svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.grey};
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .codie {
    transition: 0.3s ease-in-out;
    margin: 20px 0;

    &:hover {
      opacity: 0.8;
    }

    svg {
      fill: ${({ theme }) => theme.grey};
      width: 68px;
      height: auto;
    }
  }

  @media only screen and (max-width: 1600px) {
    .container {
      padding: 60px 15px;
    }

    .social {
      a {
        svg {
          width: 20px;
        }
      }
    }

    .codie {
      margin: 15px 0;

      svg {
        width: 60px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      padding: 50px 15px;
    }

    .social {
      gap: 25px;

      a {
        svg {
          width: 18px;
        }
      }
    }

    .codie {
      margin: 10px 0;

      svg {
        width: 60px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 40px 15px;
    }

    .buttons {
      gap: 10px;
    }

    .social {
      gap: 20px;
    }

    .codie {
      margin: 10px 0;

      svg {
        width: 50px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      padding: 30px 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .social {
      gap: 15px;
    }

    .codie {
      svg {
        width: 45px;
      }
    }
  }
`;
