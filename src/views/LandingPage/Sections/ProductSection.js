import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridOn from "@material-ui/icons/GridOn";
import Restaurant from "@material-ui/icons/Restaurant";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>O que é?</h2>
          <h5 className={classes.description}>
            O projeto On Menu, é uma ferramenta para visualização de cardápio de
            forma online, através de um Progressive Web App acessado via QR
            Code. Proporcionando uma nova experiência de atendimento aos
            clientes, impulsionando o uso de tecnologia em ambientes que estão
            emergindo no cenário.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="QR Code"
              description="Tecnologia que possibilita o fácil acesso a ferramenta, de forma que interessa o usuário por instigar a descobrir o que pode acontecer"
              icon={GridOn}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Restaurantes"
              description="Com o foco em atender a necessidade por tecnologia de bares e restaurantes, a solução OnMenu traz o conforto, tanto aos clientes como aos funcionários da organização."
              icon={Restaurant}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
