import { createTheme, Theme, adaptV4Theme } from "@mui/material/styles";

import { green, brown } from '@mui/material/colors';

const lettershiftTheme: Theme = createTheme(adaptV4Theme({
  palette: {
    background: {
      default: green[50]
    },
    primary: {
      main: green[900],
    },
    secondary: {
      main: brown[300],
    },
  },
}));

export default lettershiftTheme;
