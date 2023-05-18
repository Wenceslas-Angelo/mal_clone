import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../API';

interface animeInfoType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  animePictures: [{ jpg: { image_url: string } }] | null;
}

const initialState: animeInfoType = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  animePictures: null,
};

export const getAnimePictures = createAsyncThunk(
  'anime/informationPictures',
  async (id: number, thunkApi) => {
    try {
      return await API.getAnimeInfo(id, 'pictures');
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const animePicturesSlice = createSlice({
  name: 'animeInformationPictures',
  initialState,
  reducers: {
    resetAnimePicturesState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimePictures.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnimePictures.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animePictures = action.payload;
      })
      .addCase(getAnimePictures.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetAnimePicturesState } = animePicturesSlice.actions;

export default animePicturesSlice.reducer;
