import { ThemeProvider } from "@material-ui/core/styles";
import zooclassTheme from "./themes/zooclassTheme";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuBar from "./components/navigation/MenuBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={zooclassTheme}>
        <MenuBar />
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
