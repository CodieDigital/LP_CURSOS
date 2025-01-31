import styled from "styled-components";

export const Footer = styled("footer")`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.black};

  .container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    max-width: 1760px;
  }

  .logo {
    width: 100%;
    display: flex;
    max-width: 93px;

    img {
      width: inherit;
      aspect-ratio: 93/30;
    }
  }

  .codie {
    opacity: 0.8;
    transition: 0.3s ease-in-out;

    display: flex;
    align-items: center;

    &:hover {
      opacity: 1;
    }

    svg {
      fill: ${({ theme }) => theme.grey};
      height: auto;
      width: 67px;
    }
  }

  @media only screen and (max-width: 1600px) {
    .codie {
      svg {
        width: 60px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 18px 0;

    .codie {
      svg {
        width: 50px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 15px 0;

    .codie {
      svg {
        width: 45px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .logo {
      max-width: 70px;
    }

    .codie {
      svg {
        width: 40px;
      }
    }
  }
`;
