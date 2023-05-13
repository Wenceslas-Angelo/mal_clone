import { configureStore } from '@reduxjs/toolkit';

import topAnimeReducer from './anime/topAnimeSlice';
import seasonsUpcomingReducer from './anime/seasonsUpcomingSlice';
import seasonsNowReducer from './anime/seasonsNowSlice';

export const store = configureStore({
  reducer: {
    topAnime: topAnimeReducer,
    seasonsUpcoming: seasonsUpcomingReducer,
    seasonsNowReducer: seasonsNowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
