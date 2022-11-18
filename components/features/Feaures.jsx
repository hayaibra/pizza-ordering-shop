import React from "react";
import { FeaturesBox , SliderBox } from "./Style";
import { Box } from "@mui/material";
import { useState } from "react";
import Arrows from "./arrows/Arrows";
import Slider from "./slider/Slider";

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
        <Arrows img="arrowl.png" handleArrowLeft={handleArrowLeft} dir="left" />
        <SliderBox index={index}>
          {featureArray.map((feature, i) => (
            <Slider key={i} feature={feature} />
          ))}
        </SliderBox>
        <Arrows
          img="arrowr.png"
          handleArrowRight={handleArrowRight}
          dir="right"
        />
      </Box>
    </FeaturesBox>
  );
}

export default Feature;
