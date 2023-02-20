import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

// import logotipo from "../images/pigz-gestao-logo.svg";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <div style={{ flexGrow: 1 }}>
              <img src={logotipo} alt="logo" />
            </div> */}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
