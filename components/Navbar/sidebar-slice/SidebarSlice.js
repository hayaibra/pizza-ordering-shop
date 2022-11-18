import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import BasketSlice from "../basket-slice/BasketSlice";
import SidebarContent from "./sidebar-content/SidebarContent";

const SidebarSlice = ({ handleClick, open, translate, links }) => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
      <BasketSlice basket={false} />
      <MenuIcon
        sx={{ fontSize: "30px", cursor: "pointer" }}
        onClick={handleClick}
      />
      {open && (
        <SidebarContent
          translate={translate}
          handleClick={handleClick}
          links={links}
        />
      )}
    </Box>
  );
};

export default SidebarSlice;
