import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const RouteSwitch = (): JSX.Element => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
  </Switch>
);

export default RouteSwitch;
