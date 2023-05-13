import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../API';
import { initialData } from '../../utils';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  seasonsNow: initialData,
};

export const getSeasonsNow = createAsyncThunk(
  'anime/seasonsNow',
  async (page: number, thunkApi) => {
    try {
      return await API.getSeasonsNow(page);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const seasonsNowSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    resetSeasonsNowState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeasonsNow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeasonsNow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.seasonsNow = action.payload;
      })
      .addCase(getSeasonsNow.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetSeasonsNowState } = seasonsNowSlice.actions;

export default seasonsNowSlice.reducer;
