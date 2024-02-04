import { createSlice } from '@reduxjs/toolkit';

import { getDailyNorma, updateDailyNorma } from './dailyNormaThunk';


const dailyNormaSlice = createSlice({
  name: 'dailyNorma',
  initialState: {
    dailyNorma: 0,
    weight: 0,
    gender: '',
    activityTime: 0,
    willDrink: 0,
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDailyNorma.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getDailyNorma.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.dailyNorma = payload.dailyNorma || 0;
        state.weight = payload.weight || 0;
        state.gender = payload.gender || '';
        state.activityTime = payload.activityTime || 0;
        state.willDrink = payload.willDrink || 0;
      })
      .addCase(getDailyNorma.rejected, (state, { payload }) => {
        state.isloading = false;
        state.error = payload;
      })
      .addCase(updateDailyNorma.pending, (state) => {
        state.isloading = true;
      })
      .addCase(updateDailyNorma.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.dailyNorma = payload.dailyNorma || 0;
        state.weight = payload.weight || 0;
        state.gender = payload.gender || '';
        state.activityTime = payload.activityTime || 0;
        state.willDrink = payload.willDrink || 0;
      })
      .addCase(updateDailyNorma.rejected, (state, { payload }) => {
        state.isloading = false;
        state.error = payload;
      }),
});

export const dailyNormaReducer = dailyNormaSlice.reducer;


