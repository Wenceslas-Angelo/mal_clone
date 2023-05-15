import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../API';
import { initialData } from '../../utils';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  seasonsUpcoming: initialData,
};

export const getSeasonsUpcoming = createAsyncThunk(
  'anime/seasonsUpcoming',
  async (page: number, thunkApi) => {
    try {
      return await API.getSeasonsUpcoming(page);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const seasonsUpcomingSlice = createSlice({
  name: 'animeSeasonsUpcoming',
  initialState,
  reducers: {
    resetSeasonsUpcomingState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeasonsUpcoming.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeasonsUpcoming.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.seasonsUpcoming = action.payload;
      })
      .addCase(getSeasonsUpcoming.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetSeasonsUpcomingState } = seasonsUpcomingSlice.actions;

export default seasonsUpcomingSlice.reducer;
