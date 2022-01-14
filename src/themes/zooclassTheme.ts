import { createTheme, Theme } from "@mui/material/styles";

import { green, brown } from "@mui/material/colors";

const theme: Theme = createTheme({
  palette: {
    background: {
      default: green[50],
    },
    primary: {
      main: green[900],
    },
    secondary: {
      main: brown[300],
    },
  },
});

export default theme;
