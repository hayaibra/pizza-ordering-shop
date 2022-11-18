import React from "react";
import { AppBar } from "@mui/material";
import Image from "next/image";
import { ToolbarBox } from "./Style";
import { useState } from "react";
import LinkSlice from "./link-slice/LinkSlice";
import BasketSlice from "./basket-slice/BasketSlice";
import SidebarSlice from "./sidebar-slice/SidebarSlice";
import { links } from "../../links";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [translate, setTranslate] = useState(100);

  function handleClick() {
    setOpen(!open);
    setTranslate(0);
  }

  return (
    <>
      <AppBar position="sticky" color="othercolor" elevation={0}>
        <ToolbarBox>
          <Image
            src={require("../../public/imgs/logo.png")}
            width="200"
            height="30"
            alt="logo"
          />
          <LinkSlice links={links} />
          <BasketSlice basket={true} />
          <SidebarSlice
            handleClick={handleClick}
            open={open}
            translate={translate}
            links={links}
          />
        </ToolbarBox>
      </AppBar>
    </>
  );
}

export default Navbar;
