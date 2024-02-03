import { createSlice} from '@reduxjs/toolkit';

import { getDailyNorma, updateDailyNorma } from './dailyNormaThunk';

const initialState = {
  dailyNorma: 0,
  isLoading: false,
};



export const dailyNormaSlice = createSlice({
  name: 'dailyNorma',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDailyNorma.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDailyNorma.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dailyNorma = payload;
      })
      .addCase(getDailyNorma.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateDailyNorma.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDailyNorma.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dailyNorma = payload;
      })
      .addCase(updateDailyNorma.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectDailyNorma = (state) => state.dailyNorma.dailyNorma;

export const dailyNormaReducer = dailyNormaSlice.reducer;

