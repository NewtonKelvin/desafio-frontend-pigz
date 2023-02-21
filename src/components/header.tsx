import { AppBar, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

import logotipo from "../images/pigz-gestao-logo.svg";
import { Navbar } from "../styles/header.ts";
import { StyledButton } from "../styles/global.ts";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Navbar>
          <AppBar
            position="relative"
            color="default"
            style={{ boxShadow: "none" }}
          >
            <Toolbar>
              <div style={{ flexGrow: 1 }}>
                <img src={logotipo} alt="logo" style={{ display: "flex" }} />
              </div>
              <StyledButton color="inherit">Já sou parceiro</StyledButton>
            </Toolbar>
          </AppBar>
        </Navbar>
      </Box>
    </>
  );
};
export default Header;
