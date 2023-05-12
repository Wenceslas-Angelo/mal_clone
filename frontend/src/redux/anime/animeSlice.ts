import { createSlice } from '@reduxjs/toolkit';
import { getTopAnime } from './animeAction';
import { animeData, Pagination } from '../../types/anime';

interface AnimeState {
  data: animeData[];
  pagination: Pagination;
}

const initialData: AnimeState = {
  data: [],
  pagination: {
    last_visible_page: 0,
    has_next_page: false,
    current_page: 0,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
};

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  topAnime: initialData,
};

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopAnime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.topAnime = action.payload;
      })
      .addCase(getTopAnime.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetState } = animeSlice.actions;

export default animeSlice.reducer;
