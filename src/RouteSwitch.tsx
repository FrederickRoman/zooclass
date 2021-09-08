import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import About from "./pages/About";
import "./RouteAnimation.css";

const RouteSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={300}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default RouteSwitch;
