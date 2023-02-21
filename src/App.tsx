import React, { useState } from "react";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import GlobalStyle, { StyledButton } from "./styles/global.ts";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { CustomCard, FirstSection, SecondSection } from "./styles/header.ts";

import pigz_burguer from "./images/burguer_2.png";
import pigz_phones from "./images/phones.png";
import pigz_alert from "./images/grupo_3535.svg";

import pigz_store from "./images/storefront.svg";
import pigz_phone from "./images/smartphone.svg";
import pigz_graph from "./images/graphic.svg";
import pigz_printer from "./images/printer.svg";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [tabsValue, setTabsValue] = useState(1);
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  return (
    <>
      <GlobalStyle />
      <Header />

      {/* Primeira seção */}
      <FirstSection sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12} md={6} style={{ color: "white" }}>
            <h1>Pigz: tudo que você precisa pra vender ainda mais!</h1>
            <h2>
              Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
              Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </h2>
            <img src={pigz_burguer} alt="burguer" />
          </Grid>
          <Grid xs={12} md={6}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "32px",
                padding: "24px",
              }}
            >
              <h2>Quero vender no Pigz</h2>
              <p>Dê o primeiro passo para aumentar suas vendas</p>
              <form style={{ display: "flex", flexDirection: "column" }}>
                <label>Nome</label>
                <TextField
                  id="name-textfield"
                  variant="outlined"
                  placeholder="Leonercio Goesfeeld"
                />
                <label>Email</label>
                <TextField
                  id="email-textfield"
                  variant="outlined"
                  placeholder="leonercio.goesfeeld@email.com"
                />
                <label>Telefone</label>
                <TextField
                  id="telefone-textfield"
                  variant="outlined"
                  placeholder="leonercio.goesfeeld@email.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ width: "40px" }}>
                        +55
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <p>
                Ao continuar, aceito que a Pigz entre em contato comigo por
                telefone, e-mail ou WhatsApp.
              </p>
              <Button
                color="inherit"
                style={{ backgroundColor: "#FA641E", color: "white" }}
              >
                Continuar
              </Button>
            </div>
          </Grid>
        </Grid>
      </FirstSection>

      {/* Segunda seção */}
      <SecondSection>
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
              Tenha todas as funcionalidades Pigz sem taxa de adesão, sem
              comissão por cada venda, sem letrinhas miúdas.
            </h2>
          </Grid>
        </Grid>
      </SecondSection>

      {/* Terceira seção */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabsValue}
            onChange={handleChangeTabs}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tabsValue} index={0}>
          <h1>Pigz Marketplace</h1>
          <Box
            style={{
              background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
              borderRadius: "64px",
            }}
          >
            <p>
              Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
              mais visibilidade, no app e no site. Uma vitrine com milhares de
              clientes todos os dias, pra vender muito mais.
            </p>
            <img src={pigz_phones} alt="phone" />
          </Box>
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <h1>Pigz Marketplace</h1>
          <Box
            style={{
              background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
              borderRadius: "64px",
            }}
          >
            <p>
              Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
              mais visibilidade, no app e no site. Uma vitrine com milhares de
              clientes todos os dias, pra vender muito mais.
            </p>
            <img src={pigz_phones} alt="phone" />
          </Box>
        </TabPanel>
        <TabPanel value={tabsValue} index={2}>
          <h1>Pigz Marketplace</h1>
          <Box
            style={{
              background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
              borderRadius: "64px",
            }}
          >
            <p>
              Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
              mais visibilidade, no app e no site. Uma vitrine com milhares de
              clientes todos os dias, pra vender muito mais.
            </p>
            <img src={pigz_phones} alt="phone" />
          </Box>
        </TabPanel>
      </Box>
      <Box>
        <h1>E mais: suporte que realmente funciona!</h1>
        <h2>
          Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
          disponível pra ajudar você e seus clientes.
        </h2>
      </Box>

      {/* Quarta seção */}

      <Box>
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
                Não dependa de maquininha de cartão Segurança para receber
                pedidos Agilidade para entregar
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
      </Box>

      <Footer />
    </>
  );
}

export default App;
