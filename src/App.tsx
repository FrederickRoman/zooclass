// import logo from './logo.svg';
// import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuBar from "./components/navigation/MenuBar";
import Home from "./pages/Home"

function App() {
  return (
    <>
      <CssBaseline />
      <MenuBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
