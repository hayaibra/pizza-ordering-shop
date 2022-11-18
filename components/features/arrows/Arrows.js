import React from "react";
import { ArrowBox } from "./Style";
import Image from "next/image";

const Arrows = ({ img, handleArrowLeft, dir, handleArrowRight }) => {
  return (
    <ArrowBox onClick={dir === "left" ? handleArrowLeft : handleArrowRight} dir={dir}>
      <Image
        src={require(`../../../public/imgs/${img}`)}
        objectFit="fill"
        alt="leftarrow"
      />
    </ArrowBox>
  );
};

export default Arrows;
