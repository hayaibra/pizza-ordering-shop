import { styled, Paper } from "@mui/material";

export const PaperBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  cursor: "pointer",
  height: "300px",
}));

export const RateBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const DescBox = styled("p")(({ theme }) => ({
  fontSize: "10px",
  fontWeight: "bold",
  padding: "0 20px",
  marginTop: "0",
}));
