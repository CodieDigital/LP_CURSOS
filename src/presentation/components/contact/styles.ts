import { styled } from "styled-components";

export const Contact = styled("section")`
  padding: 6vh 0;

  .container {
    display: flex;
    gap: 5%;
    align-items: center;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 900px) {
    .container {
      flex-direction: column;
      gap: 3rem;
      align-items: stretch;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 4vh 0;
  }
`;
