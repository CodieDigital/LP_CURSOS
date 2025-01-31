import styled from "styled-components";

export const Form = styled("div")`
  width: 100%;
  max-width: 827px;
  margin-left: 50px;

  .sucesso {
    background-color: ${({ theme }) => theme.green};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 25px;

    h2 {
      color: #000;
    }
  }

  .select {
    [class*="-control"] {
      color: #fff !important;
      outline: none;
      height: 48px;
      border: 1px solid #515151;
      padding: 0 16px;
      border-radius: 5px;
      background-color: #2a2a2a;
    }

    [class*="-singleValue"] {
      grid-area: 1 / 1 / 2 / 3;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${({ theme }) => theme.grey40};
      margin-left: 2px;
      margin-right: 2px;
      box-sizing: border-box;
      font-size: 14px;
    }
  }

  h2 {
    color: ${({ theme }) => theme.primaryColor};
  }

  > p {
    margin-top: 30px;

    color: ${({ theme }) => theme.grey};
    line-height: 1.25;
  }

  .container-switch {
    width: 100%;
  }

  .row + * {
    width: 100%;
  }

  form {
    margin-top: 60px;

    .conntent_form_infinity_forge {
      .row {
        > div {
          width: 100%;
        }
      }

      label {
        color: ${({ theme }) => theme.grey} !important;
        line-height: 1.4;
      }

      .input_control {
        input {
          color: ${({ theme }) => theme.grey} !important;
          outline: none;
          height: 48px;

          border: 1px solid ${({ theme }) => theme.grey80};
          padding: 0 16px;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.grey100};

          &::placeholder {
            color: ${({ theme }) => theme.grey40};
          }
        }

        .eye .icon svg {
          fill: ${({ theme }) => theme.primaryColor};
        }
      }
    }

    .form-button {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      > div {
        flex: 1;
      }

      button {
        outline: none;
        border: none;
        font-size: 16px;
        color: ${({ theme }) => theme.grey100};

        width: 100%;
        height: 48px;
        max-width: 404px;

        padding: 0px 30px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.primaryColor};
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    > p {
      margin-top: 25px;
    }

    form {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    > p {
      margin-top: 20px;
    }

    form {
      margin-top: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {
    > p {
      margin-top: 10px;
    }

    form {
      margin-top: 30px;

      .conntent_form_infinity_forge .input_control input,
      .form-button button {
        height: 42px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    form {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;

    h2 {
      text-align: center !important;
    }
    p {
      text-align: center !important;
    }
  }

  @media only screen and (max-width:500px) {
    .form-button {
      flex-direction: column;

      > div:nth-child(2) {
        width: 100%;
      }
    }
  }
`;
