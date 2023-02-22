import React from "react";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import GlobalStyle from "./styles/global.ts";

import FirstArea from "./components/firstArea.tsx";
import SecondArea from "./components/secondArea.tsx";
import ThirdArea from "./components/thirdArea.tsx";

import FourthArea from "./components/fourthArea.tsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <GlobalStyle />
      <Header />

      <FirstArea />
      <SecondArea />
      <ThirdArea />
      <FourthArea />

      <Footer />
    </Box>
  );
}

export default App;
