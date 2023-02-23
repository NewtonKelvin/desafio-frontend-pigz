import { Box, Grid, Typography } from "@mui/material";
import { SecondSection } from "../styles/global.ts";

import pigz_alert from "../images/grupo_3535.svg";
import pigz_store from "../images/storefront.svg";
import pigz_phone from "../images/smartphone.svg";
import pigz_graph from "../images/graphic.svg";
import pigz_printer from "../images/printer.svg";

import styled from "styled-components";

const CustomCard = styled(Box)`
  padding: 40px 0;
  margin: 40px;
  border-radius: 64px;
  background-color: #fafafa;
  color: #333333;
  display: flex;
  text-align: center;
  flex-direction: column;
  &:hover {
    margin: 2px solid #cccccc;
  }
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  img {
    width: 72px;
    height: 72px;
    margin: 0 auto;
    margin-bottom: 32px;
  }
`;

const SecondArea = () => {
  return (
    <SecondSection sx={{ flexGrow: 1 }}>
      <Grid container rowGap={2}>
        <Grid xs={12} md={12}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={pigz_alert}
              alt="pigz logo"
              height={140}
              style={{ marginTop: "-70px" }}
            />
            <Typography
              fontSize={32}
              fontWeight={"bold"}
              color={"#333333"}
              textAlign={"center"}
            >
              Você tem um novo Pigzdido!
            </Typography>
          </div>
        </Grid>
        <Grid xs={12} md={3}>
          <CustomCard>
            <img src={pigz_store} alt="market logo" />
            <h1>Marketplace</h1>
            <h2>Pra sua loja vender mais</h2>
          </CustomCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CustomCard>
            <img src={pigz_phone} alt="market logo" />
            <h1>É fácil e rápido</h1>
            <h2>Fazer um pedido no Pigz</h2>
          </CustomCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CustomCard>
            <img src={pigz_graph} alt="market logo" />
            <h1>Pigz Gestão</h1>
            <h2>Você no controle, sempre</h2>
          </CustomCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CustomCard>
            <img src={pigz_printer} alt="market logo" />
            <h1>Vias de impressão</h1>
            <h2>Personalizáveis</h2>
          </CustomCard>
        </Grid>
        <Grid xs={12} md={12}>
          <div style={{ width: "400px", margin: "0 auto" }}>
            <Typography
              fontSize={32}
              fontWeight={700}
              style={{ marginBottom: "20px" }}
            >
              Tudo que você precisa por apenas R$199/mês
            </Typography>
            <Typography fontSize={16} fontWeight={400}>
              Tenha todas as funcionalidades Pigz sem taxa de adesão, sem
              comissão por cada venda, sem letrinhas miúdas.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </SecondSection>
  );
};

export default SecondArea;
