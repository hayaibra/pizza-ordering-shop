import { Box, Paper, styled } from "@mui/material";

export const PaymentBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

export const PaymentContent = styled(Paper)(({theme})=>({
  padding: "20px",
  height: "300px",
  width: "200px",

  [theme.breakpoints.down("md")]: {
    marginTop: "30px",
  },
}));
