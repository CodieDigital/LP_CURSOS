import styled from "styled-components";

export const Header = styled("header")<{ $hasEnterbutton?: boolean }>`
  /* background-color: ${(props) => props.theme.black}; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;

  .container {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: ${({ $hasEnterbutton }) =>
      $hasEnterbutton ? "space-between" : "center"};
    padding: 20px 15px;
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 15px;
    }
  }
`;
