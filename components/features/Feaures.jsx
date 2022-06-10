import React from "react";
import Image from "next/image";
import { FeaturesBox, ArrowLeftBox, ArrowRightBox, SliderBox } from "./Style";
import { Box } from "@mui/material";
import { useState } from "react";

function Feature() {
  const featureArray = ["feature-1.png", "feature-2.png", "feature-3.png"];

  const [index, setindex] = useState(0);

  function handleArrowRight() {
    setindex(index !== 2 ? index + 1 : 0);
  }

  function handleArrowLeft() {
    setindex(index !== 0 ? index - 1 : 2);
  }

  return (
    <FeaturesBox>
      <Box position="relative">
        <ArrowLeftBox
          sx={{
            width: { xs: "20px", sm: "40px" },
            height: { xs: "20px", sm: "40px" },
            padding: "5px",
          }}
          onClick={() => handleArrowLeft()}
        >
          <Image
            src={require("../../public/imgs/arrowl.png")}
            objectFit="fill"
            alt="leftarrow"
          />
        </ArrowLeftBox>
        <SliderBox sx={{ transform: `translateX(${-100 * index}vw)` }}>
          {featureArray.map((feature, i) => (
            <Box
              sx={{
                padding: "10px 50px",
                width: "100vw",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
              key={i}
            >
              <Image
                src={require(`../../public/imgs/${feature}`)}
                objectFit="contain"
                alt={feature}
              />
            </Box>
          ))}
        </SliderBox>
        <ArrowRightBox
          sx={{
            width: { xs: "20px", sm: "40px" },
            height: { xs: "20px", sm: "40px" },

            padding: "5px",
          }}
          onClick={() => handleArrowRight()}
        >
          <Image
            src={require("../../public/imgs/arrowr.png")}
            objectFit="fill"
            alt="rightarrow"
          />
        </ArrowRightBox>
      </Box>
    </FeaturesBox>
  );
}

export default Feature;
