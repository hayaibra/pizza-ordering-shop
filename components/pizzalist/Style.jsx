import { styled, Typography, Grid } from "@mui/material";

export const PizzaListBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
  padding: "60px 0 ",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "40px",
  marginTop: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));

export const ContentBox = styled(Grid)(({ theme }) => ({
  padding: "0 30px",

  [theme.breakpoints.only("xs")]: {
    justifyContent: "center",
  },
}));

export const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
}));
