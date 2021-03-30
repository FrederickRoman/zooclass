// import logo from './logo.svg';
// import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MenuBar from "./components/navigation/MenuBar";
import ZooPanel from "./components/zoo/ZooPanel";

function App() {
  return (
    <>
      <CssBaseline />
      <MenuBar />
      <Container>
        <ZooPanel />
      </Container>
    </>
  );
}

export default App;
