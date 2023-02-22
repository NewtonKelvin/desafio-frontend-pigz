import { Button, Grid, InputAdornment, TextField } from "@mui/material";

import { FirstSection } from "../styles/global.ts";

import pigz_burguer from "../images/burguer_2.png";

const FirstArea = () => {
  return (
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
  );
};

export default FirstArea;
