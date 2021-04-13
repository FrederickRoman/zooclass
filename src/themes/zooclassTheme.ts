import { createMuiTheme, Theme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";

const lettershiftTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: brown[300],
    },
  },
});

export default lettershiftTheme;
