import { styled } from "styled-components";

interface IContactStyledProps {
  $inputColor?: string;
  $inputBorderColor?: string;
  $inputbackground?: string;
}

export const Contact = styled("div")<IContactStyledProps>`
  section {
    padding-top: 0;
  }

  .container {
    margin-bottom: 0;
  }

  .container-info .container-left h2 {
    color: ${(p) => p.theme.primaryColor};
    text-transform: unset;
  }

  .description {
    color: ${(p) => p.theme.grey};
  }

  svg {
    fill: ${(p) => p.theme.primaryColor};
  }

  .link {
    text-decoration: none;
    color: ${(p) => p.theme.grey};
  }

  form {
    label {
      font-weight: bold !important;
      color: ${(p) => p.theme.grey} !important;
    }

    .container-fields {
      display: flex !important;
    }

    input,
    textarea {
      width: 100%;
      border: ${(p) =>
        p.$inputBorderColor
          ? `${p.$inputBorderColor} 1px solid !important`
          : "none !important"};
      padding: 12px 16px;
      border-radius: 1rem !important;
      color: ${(p) => p.$inputColor} !important;
      background-color: ${(p) => p.$inputbackground} !important;

      &::placeholder {
        opacity: 0.5;
        color: ${(p) => p.$inputColor} !important;
      }
    }

    textarea {
      resize: none;
    }

    button {
      min-width: 50%;
      margin: 0 auto;
      color: ${(p) => p.theme.buttonColor} !important;
      background-color: ${(p) => p.theme.buttonBackgroundColor} !important;

      span {
        text-transform: capitalize !important;
      }
    }

    .error-message {
      color: red !important;
    }
  }
`;
