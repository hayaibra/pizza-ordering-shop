import React from "react";
import { Grid, Container } from "@mui/material";
import { Designed, FooterBox, Footerr } from "./Style";
import FooterItems from "./footer-items/FooterItems";
import { services } from "../../services";

function Footer() {
  return (
    <Footerr>
      <FooterBox>
        <Container>
          <Grid container spacing={10} my={4}>
            {services.map((service, i) => (
              <FooterItems service={service} key={i} />
            ))}
          </Grid>
        </Container>
      </FooterBox>
      <Designed>Designed By HAYA IBRAHIM</Designed>
    </Footerr>
  );
}

export default Footer;
