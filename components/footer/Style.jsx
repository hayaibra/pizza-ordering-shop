import { styled, Typography, Box } from "@mui/material";

export const Footerr = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
  padding: "60px 0",
}));

export const FooterBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
}));

export const Designed = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  position: "relative",
  bottom: "-36px",
  marginBottom: 0,
  fontSize: "10px",
}));
