import { Grid } from "@mui/material";
import { CustomCard, SecondSection } from "../styles/global.ts";

import pigz_alert from "../images/grupo_3535.svg";
import pigz_store from "../images/storefront.svg";
import pigz_phone from "../images/smartphone.svg";
import pigz_graph from "../images/graphic.svg";
import pigz_printer from "../images/printer.svg";

const SecondArea = () => {
  return (
    <SecondSection sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid md={12}>
          <img src={pigz_alert} alt="pigz logo" />
          <h1>Você tem um novo Pigzdido!</h1>
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
        <Grid md={12}>
          <h1>Tudo que você precisa por apenas R$199/mês</h1>
          <h2>
            Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
            por cada venda, sem letrinhas miúdas.
          </h2>
        </Grid>
      </Grid>
    </SecondSection>
  );
};

export default SecondArea;
