import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../API';
import { animeData } from '../../types/anime';

interface animeInfoType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  anime: animeData | null;
}

const initialState: animeInfoType = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  anime: null,
};

export const getAnimeInfo = createAsyncThunk(
  'anime/information',
  async (id: number, thunkApi) => {
    try {
      return await API.getAnimeInfo(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const animeInfoSlice = createSlice({
  name: 'animeInformation',
  initialState,
  reducers: {
    resetAnimeInfoState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimeInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnimeInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.anime = action.payload;
      })
      .addCase(getAnimeInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetAnimeInfoState } = animeInfoSlice.actions;

export default animeInfoSlice.reducer;
