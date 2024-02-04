// import { createSelector } from '@reduxjs/toolkit';

// const selectDailyNorma = (state) => state.dailyNorma;

// export const selectDailyNormaData = createSelector(
//   selectDailyNorma,
//   (dailyNorma) => dailyNorma.data
// );

// export const selectDailyNormaLoading = createSelector(
//   selectDailyNorma,
//   (dailyNorma) => dailyNorma.loading
// );

// export const selectDailyNormaError = createSelector(
//   selectDailyNorma,
//   (dailyNorma) => dailyNorma.error
// );

export const selectDailyNormaData = state => state.dailyNorma;
export const selectDailyNormaWeight = state => state.weight;
export const selectDailyNormaGender = state => state.gender;
export const selectDailyNormaActivity = state => state.activityTime;
export const selectDailyNormaWillDrink = state => state.willDrink;
