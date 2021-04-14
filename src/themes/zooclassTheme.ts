import { createMuiTheme, Theme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";

const lettershiftTheme: Theme = createMuiTheme({
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
});

export default lettershiftTheme;
