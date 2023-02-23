import { Grid, Typography } from "@mui/material";

import { FourthSection, StyledButton } from "../styles/global.ts";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styled from "styled-components";

const CustomCard = styled(Grid)`
  padding: 40px;
  margin: 16px;
  border-radius: 64px;
  background-color: #fafafa;
  h1 {
    color: #333333;
    font-size: 24px;
    font-weight: 700;
  }
  h2 {
    color: #666666;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    padding-left: 0;
    line-height: 24px;
    margin-bottom: 30px;
  }
  h3 {
    background-color: #ffffff;
    padding: 14px 28px;
    border-radius: 32px;
    width: max-content;
    margin: 20px 0;
  }
  button {
    height: 56px;
    width: 100%;
    @media screen and (min-width: 1200px) {
      width: 50%;
    }
  }
`;

const FourthArea = () => {
  return (
    <FourthSection sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          sm={6}
          md={4}
          style={{ textAlign: "center", margin: "0 20px" }}
        >
          <Typography fontSize={32} fontWeight={700} color={"#333333"}>
            E mais: suporte que realmente funciona!
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#333333"}>
            Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
            disponível pra ajudar você e seus clientes.
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignContent={"center"} justifyContent={"center"}>
        <Grid xs={12} md={6}>
          <CustomCard>
            <h1>Pigz</h1>
            <h2>Tudo o que você precisa</h2>
            <ul>
              <li>Pigz Marketplace</li>
              <li>Página exclusiva</li>
              <li>Pigz Gestão Desktop e Mobile</li>
              <li>Gestão de entregadores</li>
              <li>Vias de impressão personalizáveis</li>
            </ul>
            <h3>R$ 199/mês</h3>
            <StyledButton color="inherit">Vender no pigz agora</StyledButton>
          </CustomCard>
        </Grid>
        <Grid xs={12} md={6}>
          <CustomCard>
            <h1>Pagamento On-line</h1>
            <h2>Segurança e agilidade</h2>
            <ul>
              <li>Aceite Pix e Cartão de Crédito</li>
              <li>Antecipação Pix automática</li>
              <li>
                Não dependa de maquininha de cartão Segurança para receber
                pedidos Agilidade para entregar
              </li>
              <li>Segurança para receber pedidos Agilidade para entregar</li>
              <li>Agilidade para entregar</li>
            </ul>
            <h3>2,99% por transação</h3>
            <StyledButton color="inherit">Saiba mais</StyledButton>
          </CustomCard>
        </Grid>
        <Grid
          xs={12}
          md={12}
          marginTop={"40px"}
          fontSize={16}
          fontWeight={500}
          color={"#333333"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          Fale com a Pigz
          <WhatsAppIcon />
          <small>95</small> 3224-2603
        </Grid>
      </Grid>
    </FourthSection>
  );
};

export default FourthArea;
