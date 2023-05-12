import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialData } from '../../utils';
import API from '../../API';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  topAnime: initialData,
};

export const getTopAnime = createAsyncThunk(
  'anime/top',
  async (page: number, thunkApi) => {
    try {
      return await API.getTopAnime(page);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const topAnimeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    resetTopAnimeState: (state) => {
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

export const { resetTopAnimeState } = topAnimeSlice.actions;

export default topAnimeSlice.reducer;
