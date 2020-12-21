import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from "./routes/App.routes";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="*" component={AppRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
