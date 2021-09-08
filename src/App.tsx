import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/navigation/MenuBar";
import RouteSwitch from "./RouteSwitch";
import MainFooter from "./components/footer/MainFooter";

function App(): JSX.Element {
  return (
    <Router>
      <MenuBar />
      <RouteSwitch />
      <MainFooter />
    </Router>
  );
}

export default App;
