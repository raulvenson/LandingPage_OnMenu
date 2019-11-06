import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import whats from 'assets/img/whatslink.png';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Demonstre interesse</h2>
          <h4 className={classes.description}>
            Envie-nos uma mensagem se tiver interesse em entregar uma nova
            experiência tecnológica aos seus clientes.
          </h4>
          <form>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
               <img src={whats} alt="linkwhatsapp"/>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
