import { configureStore } from '@reduxjs/toolkit';

import topAnimeReducer from './anime/topAnimeSlice';
import seasonsUpcomingReducer from './anime/seasonsUpcomingSlice';

export const store = configureStore({
  reducer: {
    topAnime: topAnimeReducer,
    seasonsUpcoming: seasonsUpcomingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
