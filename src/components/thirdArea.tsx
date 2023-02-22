import { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";

import { ThirdSection } from "../styles/global.ts";

import pigz_phones from "../images/phones.png";
import { TabPanelProps } from "../types/global.ts";

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

const ThirdArea = () => {
  const [tabsValue, setTabsValue] = useState(1);
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  return (
    <ThirdSection sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid md={12} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabsValue}
            onChange={handleChangeTabs}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid md={12}>
          <TabPanel value={tabsValue} index={0}>
            <h1>Pigz Marketplace 1</h1>
            <Box
              style={{
                background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
                borderRadius: "64px",
              }}
            >
              <p>
                Além de uma página exclusiva, com o Pigz Marketplace sua loja
                terá mais visibilidade, no app e no site. Uma vitrine com
                milhares de clientes todos os dias, pra vender muito mais.
              </p>
              <img src={pigz_phones} alt="phone" />
            </Box>
          </TabPanel>
          <TabPanel value={tabsValue} index={1}>
            <h1>Pigz Marketplace 2</h1>
            <Box
              style={{
                background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
                borderRadius: "64px",
              }}
            >
              <p>
                Além de uma página exclusiva, com o Pigz Marketplace sua loja
                terá mais visibilidade, no app e no site. Uma vitrine com
                milhares de clientes todos os dias, pra vender muito mais.
              </p>
              <img src={pigz_phones} alt="phone" />
            </Box>
          </TabPanel>
          <TabPanel value={tabsValue} index={2}>
            <h1>Pigz Marketplace 3</h1>
            <Box
              style={{
                background: "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
                borderRadius: "64px",
              }}
            >
              <p>
                Além de uma página exclusiva, com o Pigz Marketplace sua loja
                terá mais visibilidade, no app e no site. Uma vitrine com
                milhares de clientes todos os dias, pra vender muito mais.
              </p>
              <img src={pigz_phones} alt="phone" />
            </Box>
          </TabPanel>
        </Grid>
        <Grid md={12}>
          <h1>E mais: suporte que realmente funciona!</h1>
          <h2>
            Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
            disponível pra ajudar você e seus clientes.
          </h2>
        </Grid>
      </Grid>
    </ThirdSection>
  );
};

export default ThirdArea;
