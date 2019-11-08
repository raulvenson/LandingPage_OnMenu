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
import "./style.css";

import whats from "assets/img/whatslink.png";

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
              <GridItem>
                <a href="https://api.whatsapp.com/send?phone=5565999271048&text=Olá,%20tenho%20interesse%20no%20cardapio%20OnMenu.">
                  <img
                    id="img-whatsapp-worksection"
                    src={whats}
                    alt="linkwhatsapp"
                    height="95px"
                  />
                </a>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
