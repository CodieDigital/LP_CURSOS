import styled, { createGlobalStyle } from "styled-components";
import { Configurations } from "../hooks";

export const GlobalStyles = createGlobalStyle<{
  $configurations?: Configurations;
}>` 



@font-face {
    font-family: "Saira";
    src: url("/fonts/Saira-Bold.ttf");
    font-weight: 700;
  }

  @font-face {
    font-family: "Saira";
    src: url("/fonts/Saira-Regular.ttf");
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth !important;
  }


  #__next {
    min-height: 100vh;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primaryColor};
  }
  
  .conntent_form_infinity_forge > div {
    display: block !important;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
  }

  .grecaptcha-badge {
    display: none !important;
  }

  #CALENDAR {
    > div {
      .calendar-header {
        h4 {
          color: ${({ theme }) => theme.black};
        }

        button {
          background-color: transparent;
        }
      }

      .months-box {
        .selected {
          color: ${({ theme }) => theme.grey100};
        }
      }
    }
  }


  body {
    font-family: "Saira" !important;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.tertiaryColor};
  }

 

  .container {
    max-width: 1470px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    gap: 15px;
  }

  .swiper-pagination {
  height: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.3;
    cursor: pointer;

    &-active {
      opacity: 1;
    }
    
    &:hover {
      opacity: 0.7;
    }
  }
}


  .spacing-y-100 {
    padding: 100px 0;
  }

  @media only screen and (max-width: 1600px) {
    .spacing-y-100 {
      padding: 80px 0;
    }
  }

  @media only screen and (max-width: 1400px) {
    .spacing-y-100 {
      padding: 60px 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    .spacing-y-100 {
      padding: 40px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .spacing-y-100 {
      padding: 30px 0;
    }

    .row {
      gap: 0;
      flex-direction: column;
    }
  }

  @media only screen and (max-width:768px) {
    .swiper-pagination {
    height: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }
  }
  }
`;
