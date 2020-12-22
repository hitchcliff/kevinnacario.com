import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { Home } from '../app/index';
import { Suspense } from 'react';
import { Loading } from '../components';

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Route
        render={({ location }: any) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path={RoutePattern.Home} component={Home} />
              <Route path="*">Page not found</Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Suspense>
  );
}
