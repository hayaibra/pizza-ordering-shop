import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconsContent } from "./Style";

const ImgItem = ({ service }) => {
  const { img, desc, icons } = service;
  return (
    <Box>
      <Box>
        <Image
          src={require(`../../../../public/imgs/${img}`)}
          width="200"
          height="50"
          alt="logo"
        />
      </Box>
      <Typography color="primary" my={3}>
        {desc}
      </Typography>
      <IconsContent>
        {icons.map((icon, i) => (
          <Image
            src={require(`../../../../public/imgs/${icon}`)}
            alt="icon"
            key={i}
          />
        ))}
      </IconsContent>
    </Box>
  );
};

export default ImgItem;
