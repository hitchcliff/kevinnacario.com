import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { RoutePattern } from "./RoutePattern";
import { Home } from "../app/index";

export default function AppRoutes() {
  return (
    <Route
      render={({ location }: any) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path={RoutePattern.Home} component={Home} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
}
