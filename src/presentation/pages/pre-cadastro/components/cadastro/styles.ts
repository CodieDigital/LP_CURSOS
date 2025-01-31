import styled from "styled-components";

export const Cadastro = styled("section")`
  width: 100%;
  padding: 100px 0;

  .container {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
  }

  @media only screen and (max-width: 1800px) {
    padding: 80px 0;
  }

  @media only screen and (max-width: 1600px) {
    padding: 70px 0;
  }

  @media only screen and (max-width: 1400px) {
    padding: 50px 0;
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 0;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 0;

    .container {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;

      align-items: center;

      > div {
        max-width: 500px;
      }
    }
  }
`;
