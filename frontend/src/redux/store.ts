import { configureStore } from '@reduxjs/toolkit';

import animeReducer from './anime/animeSlice';

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
