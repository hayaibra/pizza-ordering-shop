import { styled, Box } from "@mui/material";

export const OrdersBox = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  justifyContent: "space-between",
  padding: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const OrdersContent = styled(Box)(({ theme }) => ({
  flex: 2,
}));
