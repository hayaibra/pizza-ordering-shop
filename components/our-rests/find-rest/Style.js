import { Box, styled, Typography } from "@mui/material";

export const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const Blocks = styled(Box)(({ theme }) => ({
  marginBottom: "30px",
}));

export const TitleBox = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
  fontWeight: "bold",
  fontSize: "30px",

  [theme.breakpoints.only("xs")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
}));

export const InfoList = styled(Box)(({ theme }) => ({
  "&:not(:last-child)": {
    marginBottom: "20px",
  },

  [theme.breakpoints.down("md")]: {
    paddingLeft: "10px",
  },
}));

export const Text = styled("p")(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 0,

  [theme.breakpoints.only("md")]: {
    fontSize: "14px",
  },
}));

export const Phone = styled("p")(({ theme }) => ({
  marginTop: "5px",

  [theme.breakpoints.only("md")]: {
    fontSize: "15px",
  },
}));
