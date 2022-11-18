import { Stack } from "@mui/material";
import React from "react";
import Links from "../../ui/links/Links";

console.log();

const LinkSlice = ({ links }) => {

  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {links.map((link, i) => (
        <Links props={link} key={i} />
      ))}
    </Stack>
  );
};

export default LinkSlice;
