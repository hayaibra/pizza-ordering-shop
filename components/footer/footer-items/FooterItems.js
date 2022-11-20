import { Grid } from "@mui/material";
import React from "react";
import ImgItem from "./img-item/ImgItem";
import ListItem from "./list-item/ListItem";

const FooterItems = ({ service }) => {
  return (
    <Grid item md={3} xs={10} sm={6}>
      {service.img ? (
        <ImgItem service={service} />
      ) : (
        <ListItem service={service} />
      )}
    </Grid>
  );
};

export default FooterItems;
