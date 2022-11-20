import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MoreServicesBox, ServiceBox } from "./Style";

const services = [
  { img: "paid.png", title: "Payment" },
  { img: "bake.png", title: "Preparing" },
  { img: "bike.png", title: "On The Way" },
  { img: "delivered.png", title: "Delivered" },
];

const MoreServices = () => {
  return (
    <MoreServicesBox>
      {services.map((service, i) => (
        <ServiceBox key={i}>
          <Image
            src={require(`../../../public/imgs/${service.img}`)}
            width="30"
            height="30"
            alt=""
          />
          <Typography>{service.title}</Typography>
          <Image
            src={require("../../../public/imgs/checked.png")}
            width="20"
            height="20"
            alt="checked"
          />
        </ServiceBox>
      ))}
    </MoreServicesBox>
  );
};

export default MoreServices;
