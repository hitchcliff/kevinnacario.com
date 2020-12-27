import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Portfolio, SinglePortfolio } from '../app/index';
import { RoutePattern } from './RoutePattern';

export default function PortfolioRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={RoutePattern.Portfolio} component={Portfolio} />
        <Route path={RoutePattern.Portfolio + '/:id'} component={SinglePortfolio} />
      </Switch>
    </AnimatePresence>
  );
}
