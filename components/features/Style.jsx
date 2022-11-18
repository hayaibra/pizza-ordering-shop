import { styled } from "@mui/material";

export const FeaturesBox = styled("div")({
  position: "relative",
  overflow: "hidden",
  padding: "60px 0",
});

export const SliderBox = styled("div")(({ index }) => ({
  width: "300vw",
  height: "100%",
  display: "flex",
  transition: "all 1.5s ease-in-out",
  transform: `translateX(${-100 * index}vw)`,
}));
