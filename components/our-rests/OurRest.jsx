import React from "react";
import Image from "next/image";
import { ImageBox, OurRestBox, OurRestContent } from "./Style";
import FindRest from "./find-rest/FindRest";
import { info } from "../../info";

function OurRest() {
  const findRest = info.findRest;
  const work = info.findRest;
  return (
    <OurRestBox id="contact">
      <OurRestContent>
        <ImageBox>
          <Image
            src={require("../../public/imgs/footer.png")}
            width="300"
            height="500"
            style={{ left: "-50px" }}
            alt="footer"
          />
        </ImageBox>
        <FindRest findRest={findRest} />
        <FindRest findRest={work} />
      </OurRestContent>
    </OurRestBox>
  );
}

export default OurRest;
