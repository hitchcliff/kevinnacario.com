import { createSelector } from '@reduxjs/toolkit';
import Store, { RootState } from '../../Store';
import { portfolioAdapter } from './portfolio.slice';

export const portfolioSelector = portfolioAdapter.getSelectors(
  (state: RootState) => state.portfolio_items.items,
);

export const selectAllPortfolioSelector = createSelector(
  portfolioSelector.selectAll,
  (item) => item,
);

export const portfolioId = Store.getState().portfolio_items.portfolioId;
