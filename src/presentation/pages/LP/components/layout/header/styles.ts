import styled from "styled-components";

export const Header = styled("header")<{ $hasEnterbutton?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.5);

  .container {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: ${({ $hasEnterbutton }) =>
      $hasEnterbutton ? "space-between" : "center"};
    padding: 20px 15px;
  }

  .infinity-forge-button a {
    background: ${({ theme }) => theme.buttonBackgroundColor} !important;
    color: ${(p) => p.theme.black} !important;
    border: none !important;

    svg {
      fill: currentColor;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 15px;
    }
  }
`;
