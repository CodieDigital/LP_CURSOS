import { styled } from "styled-components";

interface IFormContactStyledProps {
  $inputColor?: string;
  $inputBorderColor?: string;
  $inputbackground?: string;
}

export const FormContact = styled("div")<IFormContactStyledProps>`
  flex: 1;

  .conntent_form_infinity_forge {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  form {
    > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;

      .actions-form {
        flex: 1;
      }
    }

    label {
      font-weight: bold !important;
      color: ${(p) => p.theme.grey} !important;
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
      height: 130px;
      resize: none;
    }

    .container-switch {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .container-fields {
      display: flex;
      gap: 16px;

      .input-component {
        flex: 1;
      }
    }

    .input_control {
      margin-bottom: 0;
    }

    button {
      min-width: 50%;
      margin: 0 auto;
      color: ${(p) => p.theme.buttonColor} !important;

      span {
        text-transform: capitalize !important;
      }

      .button-icon {
        display: flex;
        justify-content: center;
        width: 100% !important;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    .error-message {
      margin-top: 0.5rem;
      background-color: transparent !important;
      color: red !important;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 900px) {
    .error-message {
      font-size: 12px;
      margin-top: 4px;
      padding-left: 10px;
      font-weight: 400 !important;
    }
  }

  @media only screen and (max-width: 550px) {
    .container-fields {
      flex-direction: column;
    }
  }
`;
