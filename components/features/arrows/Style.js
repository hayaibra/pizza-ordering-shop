import { styled, Box } from "@mui/material";

export const ArrowBox = styled(Box)(({ theme, dir }) => ({
  width: "40px",
  height: "40px",
  padding: "5px",
  backgroundColor: theme.palette.othercolor.main,
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: "1000",
  left: dir === "left" && "20px",
  right: dir === "right" && "20px",

  [theme.breakpoints.only("xs")]: {
    width: "20px",
    height: "20px",
  },
}));

