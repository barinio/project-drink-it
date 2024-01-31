import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addWatersThunk, deleteWaterThunk, editWaterThunk, getTodayWater } from './waterThunk';

const initialState = {
  month: [],
  today: {
    dailyWaterList: [
      {
        id: 55555555555,
        waterVolume: 200,
        time: '2024-01-29T09:30',
        owner: 555,
      },
      {
        id: 55555555535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
        owner: 555,
      },
      {
        id: 55555585535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
        owner: 555,
      },
      {
        id: 55554555535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
        owner: 555,
      },
      {
        id: 55555595535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
        owner: 555,
      },
    ],
    dailyNorm: 1500,
    waterRate: 70,
  },
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTodayWater.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = payload.dailyWaterList;
        state.today.dailyNorm = payload.dailyNorma;
        // state.today.waterRate = payload.waterRate;
      })
      .addCase(addWatersThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList.push(payload.waterList);
        state.today.dailyNorm += payload.drankWater;
        console.log(payload);
      })
      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const array = state.today.dailyWaterList;
        const idx = array.findIndex(item => item._id === payload._id);
        if (idx !== -1) {
          array[idx] = payload;
        }
        state.today.dailyNorm = array.reduce((acc, item) => acc + item.waterVolume, 0);
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = state.today.dailyWaterList.filter(
          data => data._id !== payload
        );
        const array = state.today.dailyWaterList;
        state.today.dailyNorm = array.reduce((acc, item) => acc + item.waterVolume, 0);
      })
      .addMatcher(
        isAnyOf(
          getTodayWater.pending,
          addWatersThunk.pending,
          editWaterThunk.pending,
          deleteWaterThunk.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getTodayWater.rejected,
          addWatersThunk.rejected,
          deleteWaterThunk.rejected,
          editWaterThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
        }
      );
  },
});

export const waterReducer = waterSlice.reducer;
