import { Box, styled } from "@mui/material";

export const CartContentBox = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  justifyContent: "space-between",
  padding: "40px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
