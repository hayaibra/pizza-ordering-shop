import { Box, Button, styled, Typography } from "@mui/material";

export const CartTotalBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

export const CartTotalContent = styled(Box)(({ theme }) => ({
  padding: "20px",
  height: "350px",
  width: "300px",

  [theme.breakpoints.down("md")]: {
    marginTop: "30px",
  },
}));

export const CartTotalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "40px",
}));

export const Span = styled("span")(({ theme }) => ({
  fontWeight: "bold",
}));

export const PaidButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  width: "100%",
  marginBottom: "10px",
}));
