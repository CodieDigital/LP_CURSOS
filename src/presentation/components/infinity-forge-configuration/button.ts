import styled from "styled-components";

export const ButtonStyles = styled("div")`
  display: flex;
  justify-content: center;

  a,
  button {
    color: ${(props) => props.theme.black};

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    border: transparent;
    outline: none;
    transition: 0.3s ease-in-out;

    height: 48px;
    padding: 0px 30px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.primaryColor};

    width: 100%;
    max-width: fit-content;

    &:hover {
      opacity: 0.7;
    }

    .button-icon {
      display: flex;
      gap: 10px;
      align-items: center;

      svg {
        fill: currentColor;
        width: 24px;
        height: auto;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 45px;

      .button-icon {
        gap: 8px;

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 42px;
      padding: 0px 20px;

      .button-icon {
        gap: 5px;

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 40px;
    }
  }
`;
