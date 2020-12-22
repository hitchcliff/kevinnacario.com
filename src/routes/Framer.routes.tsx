import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import { FramerTest, FramerTest2 } from '../app/index';

export default function FramerRoutes() {
  return (
    <Route
      render={({ location }: any) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/framer" component={FramerTest} />
            <Route exact path="/framer/2" component={FramerTest2} />
            <Route path="*">Page not found</Route>
          </Switch>
        </AnimatePresence>
      )}
    />
  );
}
