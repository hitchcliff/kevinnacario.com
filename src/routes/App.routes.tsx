import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { Home, About, Portfolio } from '../app/index';

export default function AppRoutes() {
  return (
    <Route
      render={({ location }: any) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path={RoutePattern.Home} component={Home} />
            <Route path={RoutePattern.About} component={About} />
            <Route exact path={RoutePattern.Portfolio} component={Portfolio} />
            <Route path="*">Page not found</Route>
          </Switch>
        </AnimatePresence>
      )}
    />
  );
}
