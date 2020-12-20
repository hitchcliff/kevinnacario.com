import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "./components";
import "./styles/main.css";
import AppRoutes from "./routes/App.routes";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="*" component={AppRoutes} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
