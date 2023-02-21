import { Box } from "@mui/material";
import styled from "styled-components";

export const Navbar = styled.div`
  div {
    background-color: var(--white);
  }
`;

export const FirstSection = styled(Box)`
  background: linear-gradient(158deg, #fa641e 0%, #ff881f 100%);
`;
export const SecondSection = styled(Box)`
  background: #ffffff;
  &:first-child {
    background: red;
  }
`;
export const CustomCard = styled(Box)`
  border-radius: 64px;
  background-color: #fafafa;
  display: flex;
  text-align: center;
  flex-direction: column;
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 16px;
  }
  img {
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
`;
