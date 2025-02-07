import { Button } from "infinity-forge";
import styled from "styled-components";

export const Enterbutton = styled(Button)`
  background: transparent !important;
  color: ${({ theme }) => theme.primaryColor} !important;
  border: 1px solid ${({ theme }) => theme.primaryColor} !important;

  svg {
    fill: ${({ theme }) => theme.primaryColor};
  }
`;
