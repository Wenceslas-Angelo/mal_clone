import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../API';

interface animeInfoType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  animeCharacters:
    | [
        {
          character: {
            mal_id: number;
            images: { jpg: { image_url: string } };
            name: string;
          };
        }
      ]
    | null;
}

const initialState: animeInfoType = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  animeCharacters: null,
};

export const getAnimeCharacters = createAsyncThunk(
  'anime/informationCharacters',
  async (id: number, thunkApi) => {
    try {
      return await API.getAnimeInfo(id, 'characters');
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const animeCharactersSlice = createSlice({
  name: 'animeInformationCharacters',
  initialState,
  reducers: {
    resetAnimeCharacterState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimeCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnimeCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animeCharacters = action.payload;
      })
      .addCase(getAnimeCharacters.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetAnimeCharacterState } = animeCharactersSlice.actions;

export default animeCharactersSlice.reducer;
