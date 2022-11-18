import { styled, Box , Button} from "@mui/material";

export const SidebarContentBox = styled(Box)(({ translate }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "60%",
  backgroundColor: "#fff",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  transform: `translateX(${translate}%)`,
  transition: "0.5s ease-in-out",
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  width: "250px",
  textTransform: "capitalize",

  [theme.breakpoints.only("xs")]: {
    width: "100px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "20px",
  },
}));
