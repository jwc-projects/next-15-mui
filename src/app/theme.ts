"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0908",
      contrastText: "#F2F4F3",
    },
    secondary: {
      main: "#22333B",
      contrastText: "#F2F4F3",
    },
    text: {
      primary: "#F2F4F3",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
