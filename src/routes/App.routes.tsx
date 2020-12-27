import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { Home, About } from '../app/index';
import PortfolioRoutes from './Portfolio.routes';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={RoutePattern.Home} component={Home} />
        <Route path={RoutePattern.Portfolio} component={PortfolioRoutes} />
        <Route exact path={RoutePattern.About} component={About} />
        <Route path="*">Page not found</Route>
      </Switch>
    </AnimatePresence>
  );
}
