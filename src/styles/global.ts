import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* RESET */

  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased !important;

    width: 100vw;
    height: 100vh;
    padding: 0;

    background-image: var(--background);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text);

    transition: background-image var(--transition);
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 106.25%; //17px
    }
  }

  /* THEMES */

  :root {
    --blue: #0A84FF;
    --red: #FF453A;
    --green: #30D158;
    --white: #FFFFFF;
    --transition: .5s ease-in-out;

    
    --breakpoint-desktop: 1564px;
    --breakpoint-tablet: 768px;
    --breakpoint-phone: 320px;
    --xs: 0px;    //extra-small
    --sm: 600px;  //small
    --md: 960px;  //medium
    --lg: 1280px; //large
    --xl: 1920px;  //extra-large
    
    --page-padding: 10px;
    --navbar-height: 62px;
    --sidebar-width: 300px;
  }
`;

export default GlobalStyle;
