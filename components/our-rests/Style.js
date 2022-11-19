import { Box, styled } from "@mui/material";

export const OurRestBox = styled("div")({
  padding: "60px 0",
});

export const OurRestContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    // flexDirection: "column",
    alignItems: "flex-start",
  },

  [theme.breakpoints.only("xs")]: {
    paddingLeft: "40px",
    flexDirection: "column",
  },

  [theme.breakpoints.only("sm")]: {
    paddingLeft: "30px",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  flexBasis: "400px",

  [theme.breakpoints.down("lg")]: {
    flexBasis: "200px",
    marginRight: "30px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
