import React from "react";
import { LinkButton, SidebarContentBox } from "./Style";
import Links from "../../../ui/links/Links";

const SidebarContent = ({ translate, handleClick, links }) => {
  console.log(links);
  return (
    <SidebarContentBox onClick={handleClick} translate={translate}>
      {links.map((link, i) => (
        <LinkButton
          variant="contained"
          color="othercolor"
          elevation={0}
          key={i}
          onClick={handleClick}
        >
          <Links props={link} />
        </LinkButton>
      ))}
    </SidebarContentBox>
  );
};

export default SidebarContent;
