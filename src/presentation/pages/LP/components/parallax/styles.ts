import styled from "styled-components";

export const Parallax = styled("section")`
  padding: 30px 0;
  text-align: center;
  min-height: 550px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    min-height: inherit;

    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    color: ${({ theme }) => theme.grey};
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    line-height: 1.25;
  }

  .description {
    color: #ffff;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5),
      0px 0px 20px rgba(0, 0, 0, 0.25);
    line-height: 1.25;
  }

  a {
    line-height: 1.4;
  }

  @media only screen and (max-width: 1600px) {
    min-height: 450px;

    .container {
      gap: 30px;
    }
  }

  @media only screen and (max-width: 1400px) {
    min-height: 400px;

    .container {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    min-height: 300px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 250px;
  }

  @media only screen and (max-width: 400px) {
    h2 {
      br {
        display: none;
      }
    }
  }
`;
