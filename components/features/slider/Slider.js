import Image from "next/image";
import React from "react";
import { SliderContent } from "./Style";

const Slider = ({ feature }) => {
  return (
    <SliderContent>
      <Image
        src={require(`../../../public/imgs/${feature}`)}
        objectFit="contain"
        alt={feature}
      />
    </SliderContent>
  );
};

export default Slider;
