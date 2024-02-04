import { createSlice } from '@reduxjs/toolkit';

import { getDailyNorma, updateDailyNorma } from './dailyNormaThunk';


const initialState = {
  dailyNorma: 0,
  weight: 0,
  gender: 'man',
  activityTime: 0,
  willDrink: 0,
  isLoading: false,
};

export const dailyNormaSlice = createSlice({
  name: 'dailyNorma',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDailyNorma.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDailyNorma.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dailyNorma = payload.dailyNorma;
        state.weight = payload.weight;
        state.gender = payload.gender;
        state.activityTime = payload.activityTime;
        state.willDrink = payload.willDrink;
      })
      .addCase(getDailyNorma.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateDailyNorma.pending, state => {
        state.isLoading = true;

      })
      .addCase(updateDailyNorma.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.dailyNorma = payload.dailyNorma || 0;
        state.weight = payload.weight || 0;
        state.gender = payload.gender || '';
        state.activityTime = payload.activityTime || 0;
        state.willDrink = payload.willDrink || 0;
      })

      .addCase(updateDailyNorma.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const selectDailyNorma = state => state.dailyNorma.dailyNorma;

export const dailyNormaReducer = dailyNormaSlice.reducer;

