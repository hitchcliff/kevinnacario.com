import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { Home, About, Portfolio, SinglePortfolio } from '../app/index';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={RoutePattern.Home} component={Home} />
        <Route exact path={RoutePattern.Portfolio} component={Portfolio} />
        <Route path={RoutePattern.Portfolio + '/:id'} component={SinglePortfolio} />
        <Route exact path={RoutePattern.About} component={About} />
        <Route path="*">Page not found</Route>
      </Switch>
    </AnimatePresence>
  );
}
