import { ThemeProvider } from "@material-ui/core/styles";
import zooclassTheme from "./themes/zooclassTheme";

import CssBaseline from "@material-ui/core/CssBaseline";

import MenuBar from "./components/navigation/MenuBar";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={zooclassTheme}>
      <CssBaseline />
      <MenuBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
