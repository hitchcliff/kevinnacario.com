import { portfolioSlice } from './Portfolio/portfolio.slice';

export const rootReducer = {
  portfolio_items: portfolioSlice.reducer,
};
