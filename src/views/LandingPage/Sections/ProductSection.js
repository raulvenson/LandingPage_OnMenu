import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridOn from "@material-ui/icons/GridOn";
import Restaurant from "@material-ui/icons/Restaurant";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
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
          On Menu é um projeto acadêmico desenvolvido por alunos do curso de
          Gestão da Tecnologia da Informação da Faculdade La Salle, tendo como
          o objetivo principal entregar uma nova ferramenta de "Cardápios Web"
          para seu comércio. A base para tudo isso acontecer é a motivação, amor
          e entusiasmo de seus integrantes por tecnologia. 
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
              title="Mobile"
              description="Seu cardápio é acessado por qualquer cliente que tenha um smartphone. Também é possível ser acessado pelo computador"
              icon={PhoneIphone}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
