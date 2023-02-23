import { Box, Button } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* RESET */

  img {
    max-width: 100%;
  }
  p.MuiTypography-root {
    font-family: 'Poppins', sans-serif;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased !important;

    width: 100%;
    height: 100%;
    padding: 0;

    background-image: var(--background);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text);

    transition: background-image var(--transition);
    font-family: 'Poppins', sans-serif;
    border-bottom: 5px solid #FF671F
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

export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(258deg, #fa641e 0%, #ff881f 100%);
    border-radius: 32px;
    min-width: 158px;
    color: white;
    text-transform: inherit;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    box-shadow: 0 20px 30px -6px #ff881f;
  }
`;

export const FirstSection = styled(Box)`
  background: linear-gradient(158deg, #fa641e 0%, #ff881f 100%);
  color: white;
`;
export const SecondSection = styled(Box)`
  background: #ffffff;
  color: black;
`;
export const ThirdSection = styled(Box)`
  background: #ffffff;
  margin-top: 36px;
`;
export const FourthSection = styled(Box)`
  background: #ffffff;
  margin: 60px 0;
`;

export default GlobalStyle;
