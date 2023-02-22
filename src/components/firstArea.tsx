import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  StyledEngineProvider,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
import { FirstSection } from "../styles/global.ts";

import pigz_burguer from "../images/burguer_2.png";
import styled from "styled-components";

const LeftSide = styled(Grid)`
  background-image: url(${pigz_burguer});
  background-repeat: no-repeat;
  background-position-y: center;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    //sm
    background-position-x: 150%;
    background-size: 250px;
  }
  @media (min-width: 900px) {
    //md
    background-position-x: 100%;
    background-size: 400px;
  }
`;
const RightSide = styled(Grid)``;

const RightSideContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 500px;
  background-color: white;
  color: black;
  border-radius: 32px;
  margin: 20px;
  padding: 24px;
`;

const CustomButton = styled(Button)`
  background-color: #fa641e;
  color: white;
  margin-top: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 16px;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: #fa641e;
    color: white;
  }
`;

const CustomInput = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    fontSize: "14px",
    fontWeight: "400",
  },
});

const FirstArea = () => {
  const steps = ["Contato", "Endereço", "Estabelecimento"];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const contactForm = [
    <>
      <Typography fontSize={28} fontWeight={600}>
        Quero vender no Pigz
      </Typography>
      <Typography fontSize={13} fontWeight={400}>
        Dê o primeiro passo para aumentar suas vendas
      </Typography>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            Nome
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="name-textfield"
            variant="outlined"
            placeholder="Leonercio Goesfeeld"
          />
        </Grid>
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            Email
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="email-textfield"
            variant="outlined"
            placeholder="leonercio.goesfeeld@email.com"
          />
        </Grid>
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            Telefone
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="telefone-textfield"
            variant="outlined"
            placeholder="(95) 99876-5432"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ width: "40px" }}>
                  +55
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <div>
        <Typography fontSize={13} fontWeight={400} color={"#666666"}>
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </Typography>
      </div>

      <CustomButton color="primary" onClick={handleNext}>
        Continuar
      </CustomButton>
    </>,
    <>
      <Typography fontSize={28} fontWeight={600}>
        Onde fica a sua loja?
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <Grid container>
          <Grid md={12} xs={12}>
            <Typography fontSize={12} fontWeight={500}>
              Cep
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="name-textfield"
              variant="outlined"
              placeholder="00000-00"
            />
          </Grid>
          <Grid md={4} xs={4}>
            <Typography fontSize={12} fontWeight={500}>
              Estado
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="email-textfield"
              variant="outlined"
              placeholder="UF"
            />
          </Grid>
          <Grid md={8} xs={8}>
            <Typography fontSize={12} fontWeight={500}>
              Cidade
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="telefone-textfield"
              variant="outlined"
              placeholder="Selecione"
            />
          </Grid>
          <Grid md={12} xs={12}>
            <Typography fontSize={12} fontWeight={500}>
              Endereço
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="name-textfield"
              variant="outlined"
              placeholder="Avenida Brasil"
            />
          </Grid>
          <Grid md={4} xs={4}>
            <Typography fontSize={12} fontWeight={500}>
              Número
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="name-textfield"
              variant="outlined"
              placeholder="123"
            />
          </Grid>
          <Grid md={8} xs={8}>
            <Typography fontSize={12} fontWeight={500}>
              Complemento
            </Typography>
            <CustomInput
              style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
              id="name-textfield"
              variant="outlined"
              placeholder="Sala 1"
            />
          </Grid>
        </Grid>
      </form>
      <div>
        <Typography fontSize={13} fontWeight={400} color={"#666666"}>
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </Typography>
      </div>

      <CustomButton color="primary" onClick={handleNext}>
        Próximo
      </CustomButton>
    </>,
    <>
      <Typography fontSize={28} fontWeight={600}>
        Me conta um pouco sobre a sua loja
      </Typography>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            Nome da loja
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="name-textfield"
            variant="outlined"
            placeholder="Leonercio Goesfeeld"
          />
        </Grid>
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            CNPJ da loja
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="email-textfield"
            variant="outlined"
            placeholder="leonercio.goesfeeld@email.com"
          />
        </Grid>
        <Grid md={12} xs={12}>
          <Typography fontSize={12} fontWeight={500}>
            Tipo de loja
          </Typography>
          <CustomInput
            style={{ marginBottom: "20px", marginTop: "6px", width: "100%" }}
            id="telefone-textfield"
            variant="outlined"
            placeholder="(95) 99876-5432"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ width: "40px" }}>
                  +55
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <CustomButton color="primary" onClick={handleNext}>
        Concluir
      </CustomButton>
    </>,
  ];

  return (
    <FirstSection sx={{ flexGrow: 1 }}>
      <StyledEngineProvider injectFirst>
        <Grid container>
          <LeftSide xs={12} md={6}>
            <Grid xs={10} md={8} style={{ padding: "20px" }}>
              <Typography fontSize={40} fontWeight={700}>
                Pigz: tudo que você precisa pra vender ainda mais!
              </Typography>
              <Typography fontSize={16} fontWeight={400}>
                Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
                Marketplace e deixar sua loja prontinha para iniciar as vendas.
              </Typography>
            </Grid>
          </LeftSide>
          <RightSide xs={12} md={6}>
            <RightSideContent>
              <Stepper activeStep={activeStep} style={{ display: "none" }}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <>
                  <Typography fontSize={28} fontWeight={600}>
                    Pronto!
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Seus dados foram enviados, vamos entrar em contato em breve!
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 1 }}>Muito obrigado!</Typography>
                  <Box>
                    <CustomButton color="primary" onClick={handleReset}>
                      Voltar
                    </CustomButton>
                  </Box>
                </>
              ) : (
                <>
                  {contactForm[activeStep]}
                  <Box sx={{ display: "none", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {isStepOptional(activeStep) && (
                      <Button
                        color="inherit"
                        onClick={handleSkip}
                        sx={{ mr: 1 }}
                      >
                        Skip
                      </Button>
                    )}
                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </>
              )}
            </RightSideContent>
          </RightSide>
        </Grid>
      </StyledEngineProvider>
    </FirstSection>
  );
};

export default FirstArea;
