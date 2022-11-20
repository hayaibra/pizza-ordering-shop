import { Box } from "@mui/material";
import React from "react";
import { Servs, Title } from "./Style";

const ListItem = ({ service }) => {
  const { title, servs } = service;
  return (
    <Box>
      <Title color="primary" varient="h5">
        {title}
      </Title>
      <Box>
        {servs.map((serv, i) => (
          <Servs key={i}>{serv}</Servs>
        ))}
      </Box>
    </Box>
  );
};

export default ListItem;
