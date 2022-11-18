import { styled, Box } from "@mui/material";

export const BasketBox = styled(Box)(({ basket, theme }) => ({
  display: "block",
  marginRight: !basket && "20px",

  [theme.breakpoints.down("md")]: {
    display: basket && "none",
  },
}));
