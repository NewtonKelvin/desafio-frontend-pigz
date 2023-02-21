import { Box, Grid, Typography } from "@mui/material";

import pigz_ba from "../images/pigz-logo-ba.svg";
import pigz_appstore from "../images/selo-app-store.svg";
import pigz_googleplay from "../images/selo-google-play.svg";
import pigz_headphone from "../images/headphone.svg";
import pigz_orange from "../images/logo-orange.svg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#FAFAFA" }}>
        <Grid container>
          <Grid md={4}>
            <img src={pigz_ba} alt="pigz logo" />
            <small>Tudo que você precisa.</small>
            <br />
            <p>Baixe o APP</p>
            <img src={pigz_appstore} alt="pigz appstore" />
            <img src={pigz_googleplay} alt="pigz googleplay" />
          </Grid>
          <Grid md={4}>
            <b>Pigz</b>
            <p>Sobre o Pigz</p>
            <p>Portal do Parceiro</p>
            <p>Quero ser um Pigz Partner</p>
          </Grid>
          <Grid md={4}>
            <img src={pigz_headphone} alt="headphone" />
            <b>Fale conosco</b>
            <p>falecom@pigz.com.br</p>
            <p>(95) 3224-2603</p>
            <b>Pigz nas redes</b>
            <Grid xs={3}>
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </Grid>
          </Grid>

          <Grid
            md={12}
            style={{
              borderTop: "1px solid #9F9F9F",
              borderBottom: "5px solid #FF671F",
              display: "flex",
            }}
          >
            <Grid md={4}>
              <Typography>Nossos termos</Typography>
              <Typography>Privacidade</Typography>
              <Typography>Ajuda</Typography>{" "}
            </Grid>
            <Grid md={8}>
              © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs
              Tecnologia LTDA. CNPJ 34.895.008/0001-85
              <img src={pigz_orange} alt="orange logo" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
