import styled from "styled-components";

export const Contact = styled("section")`

  * {
    color: #fff !important;
  }

  svg {
    fill: #fff !important;
  }

  form label {
    color: #fff !important;
  }

  #global_contact {
    section {
      padding: 0;
    }
    .container {
      margin-bottom: 0;

      .container-left {
        .container-item {
          a {
            color: ${({ theme }) => theme.grey};
          }

          svg {
            fill: ${({ theme }) => theme.primaryColor};
          }
        }
      }

      > div:last-child {
        color: ${({ theme }) => theme.grey};

        form {
          .label_input_control {
            color: ${({ theme }) => theme.grey} !important;
          }

          input,
          textarea {
            color: ${({ theme }) => theme.grey20} !important;
            background: rgba(0, 0, 0, 0.2) !important;
            resize: none;
          }
        }

        .form-button {
          button {
            color: ${({ theme }) => theme.grey100};
            background-color: ${({ theme }) => theme.primaryColor};
          }
        }
      }
    }
  }
`;
