import React, { Component } from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppColors from "./view/_constants/AppColors.js";
import STYLE from "./view/_constants/STYLE.js";
import HomePage from "./view/pages/HomePage.js";

const THEME = createTheme({
  palette: {
    primary: {
      main: AppColors.Primary,
    },
    secondary: {
      main: AppColors.Secondary,
    },
    success: {
      main: AppColors.Success,
    },
    neutral: {
      main: AppColors.LessLight,
    },
  },
  typography: {
    fontFamily: ["Afacad", "sans-serif"].join(","),
    fontSize: 14,
  },
});

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Box sx={STYLE}>
          <HomePage />
        </Box>
      </ThemeProvider>
    );
  }
}
