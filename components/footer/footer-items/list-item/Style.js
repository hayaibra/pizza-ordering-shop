import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)({
  fontSize: "20px",
  fontWeight: 700,
  marginBottom:'20px'
});

export const Servs = styled(Typography)({
  fontSize: "15px",
  color: "white",

  "&:not(:last-child)": {
    marginBottom: "10px",
  },
});
