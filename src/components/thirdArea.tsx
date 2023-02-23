import { useState } from "react";
import {
  Box,
  Grid,
  MobileStepper,
  StyledEngineProvider,
  useTheme,
} from "@mui/material";

import { ThirdSection } from "../styles/global.ts";

import pigz_phones from "../images/phones.png";
import pigz_notebook_phone from "../images/notebook-phone.png";
import pigz_delivery_phone from "../images/delivery_phone.png";
import pigz_credit_card from "../images/credit_card.png";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";

const CustomContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #333333;
    margin: 40px;
  }
  p {
    padding: 40px;
    font-size: 15px;
    font-weight: 300;
    color: white;
  }
  img {
    object-fit: cover;
    height: 200px;
  }
`;

const CustomMobileStepper = styled(Grid)`
  padding: 0 16px;
  div.MuiMobileStepper-root {
    display: flex;
    justify-content: center;
  }
  div.MuiMobileStepper-dot {
    width: 88px;
    height: 4px;
    border-radius: 8px;
    margin: 0 5px;
  }
  div.MuiMobileStepper-dotActive {
    background-color: #fa641e;
  }
`;

interface containerType {
  title: string;
  text: string;
  image: string;
}

const ThirdArea = () => {
  const containers: containerType[] = [
    {
      title: "Pigz Marketplace",
      text: "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.",
      image: pigz_phones,
    },
    {
      title: "Pigz Gestão",
      text: "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.",
      image: pigz_notebook_phone,
    },
    {
      title: "Gestão de entregadores",
      text: "A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.",
      image: pigz_delivery_phone,
    },
    {
      title: "Pagamento on-line",
      text: "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.",
      image: pigz_credit_card,
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = containers.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <ThirdSection sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CustomMobileStepper xs={12} sm={6} md={4}>
          <StyledEngineProvider injectFirst>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={<></>}
              backButton={<></>}
            />
          </StyledEngineProvider>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {containers.map((container, index) => (
              <CustomContainer key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <h1>{container.title}</h1>
                    <Box
                      style={{
                        background:
                          "linear-gradient(158deg, #fa641e 0%, #ff881f 100%)",
                        borderRadius: "64px",
                      }}
                    >
                      <p>{container.text}</p>
                      <img
                        src={container.image}
                        alt={`carousel img ${index}`}
                      />
                    </Box>
                  </>
                ) : null}
              </CustomContainer>
            ))}
          </AutoPlaySwipeableViews>
        </CustomMobileStepper>
      </Grid>
    </ThirdSection>
  );
};

export default ThirdArea;
