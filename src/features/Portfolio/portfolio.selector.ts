import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../Store';
import { portfolioAdapter } from './portfolio.slice';

export const portfolioSelector = portfolioAdapter.getSelectors((state: RootState) => state.portfolio_items.items);

export const selectAllPortfolioSelector = createSelector(portfolioSelector.selectAll, (item) => item);
