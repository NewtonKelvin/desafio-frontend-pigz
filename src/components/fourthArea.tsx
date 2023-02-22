import { Grid } from "@mui/material";

import { FourthSection, StyledButton } from "../styles/global.ts";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FourthArea = () => {
  return (
    <FourthSection sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid md={6}>
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
        </Grid>
        <Grid md={6}>
          <h1>Pagamento On-line</h1>
          <h2>Segurança e agilidade</h2>
          <ul>
            <li>Aceite Pix e Cartão de Crédito</li>
            <li>Antecipação Pix automática</li>
            <li>
              Não dependa de maquininha de cartão Segurança para receber pedidos
              Agilidade para entregar
            </li>
            <li>Segurança para receber pedidos Agilidade para entregar</li>
            <li>Agilidade para entregar</li>
          </ul>
          <h3>2,99% por transação</h3>
          <StyledButton color="inherit">Saiba mais</StyledButton>
        </Grid>
        <Grid md={12}>
          Fale com a Pigz
          <WhatsAppIcon />
          <small>95</small> 3224-2603
        </Grid>
      </Grid>
    </FourthSection>
  );
};

export default FourthArea;
