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
import styled from "styled-components";

const CustomFooter = styled(Box)`
  p {
    margin: 12px 0;
  }
  padding: 60px 16px 24px 16px;
`;

const SocialMedia = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 10px;
  width: 100%;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    background-color: #676767;
    border-radius: 50%;
    padding: 5px;
  }
`;

const Footer = () => {
  return (
    <>
      <CustomFooter style={{ backgroundColor: "#FAFAFA" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowGap={"24px"}
        >
          <Grid xs={12} md={4}>
            <img src={pigz_ba} alt="pigz logo" height={40} />
            <br />
            <Typography fontSize={11} fontWeight={400} color={"#666666"}>
              Tudo que você precisa.
            </Typography>
            <br />
            <Typography fontSize={16} fontWeight={600} color={"#666666"}>
              Baixe o APP
            </Typography>
            <img src={pigz_appstore} height={30} alt="pigz appstore" />
            <img src={pigz_googleplay} height={30} alt="pigz googleplay" />
          </Grid>
          <Grid xs={12} md={4}>
            <Typography fontSize={16} fontWeight={600} color={"#666666"}>
              Pigz
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#666666"}>
              Sobre o Pigz
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#666666"}>
              Portal do Parceiro
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#666666"}>
              Quero ser um Pigz Partner
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
              }}
            >
              <img src={pigz_headphone} alt="headphone" />
              <Typography fontSize={16} fontWeight={600} color={"#666666"}>
                Fale conosco
              </Typography>
            </div>
            <Typography fontSize={14} fontWeight={400} color={"#666666"}>
              falecom@pigz.com.br
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#666666"}>
              (95) 3224-2603
            </Typography>
            <Typography fontSize={16} fontWeight={600} color={"#666666"}>
              Pigz nas redes
            </Typography>
            <SocialMedia xs={3}>
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </SocialMedia>

            <div
              style={{
                width: "100%",
                margin: "60px 0 0 0",
              }}
            ></div>
          </Grid>
          <Grid xs={12} md={12} borderTop={"1px solid #9f9f9f"}></Grid>
          <Grid
            xs={12}
            md={4}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Typography fontSize={12} fontWeight={400} color={"#666666"}>
              Nossos termos
            </Typography>
            <Typography fontSize={12} fontWeight={400} color={"#666666"}>
              Privacidade
            </Typography>
            <Typography fontSize={12} fontWeight={400} color={"#666666"}>
              Ajuda
            </Typography>{" "}
          </Grid>
          <Grid xs={12} md={8}>
            <Typography
              fontSize={10}
              fontWeight={400}
              color={"#666666"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs
              Tecnologia LTDA. CNPJ 34.895.008/0001-85
              <img src={pigz_orange} alt="orange logo" />
            </Typography>
          </Grid>
        </Grid>
      </CustomFooter>
    </>
  );
};
export default Footer;
