import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortfolioTypes } from '../../app/SinglePortfolio/types';

export const portfolioAdapter = createEntityAdapter<PortfolioTypes>({
  selectId: (item) => item.id,
});

const initialState = {
  items: portfolioAdapter.getInitialState(),
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addPortfolioItems: (state, { payload }: PayloadAction<PortfolioTypes[]>) => {
      portfolioAdapter.addMany(state.items, payload);
    },
  },
});

export const { addPortfolioItems } = portfolioSlice.actions;
