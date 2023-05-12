import { createAsyncThunk } from '@reduxjs/toolkit';
import animeService from './animeService';

export const getTopAnime = createAsyncThunk(
  'anime/recommendation',
  async (page: number, thunkApi) => {
    try {
      return await animeService.getTopAnime(page);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
