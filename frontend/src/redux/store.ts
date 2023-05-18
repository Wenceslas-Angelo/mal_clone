import { configureStore } from '@reduxjs/toolkit';

import topAnimeReducer from './anime/topAnimeSlice';
import seasonsUpcomingReducer from './anime/seasonsUpcomingSlice';
import seasonsNowReducer from './anime/seasonsNowSlice';
import animeInfoReducer from './anime/animeInfo';
import animePicturesReducer from './anime/animePictures';

export const store = configureStore({
  reducer: {
    topAnime: topAnimeReducer,
    seasonsUpcoming: seasonsUpcomingReducer,
    seasonsNow: seasonsNowReducer,
    animeInfo: animeInfoReducer,
    animePictures: animePicturesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
