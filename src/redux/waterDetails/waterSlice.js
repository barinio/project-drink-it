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
      },
      {
        id: 55555555535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
      },
      {
        id: 55555585535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
      },
      {
        id: 55554555535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
      },
      {
        id: 55555595535,
        waterVolume: 500,
        time: '2024-01-29T09:30',
      },
    ],
  },
  dailyDrank: 1500,
  waterRate: 70,
  ownerId: 0,
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTodayWater.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = payload.waterlist;
        state.dailyDrank = payload.drankWater;
        state.ownerId = payload._id;
        // state.today.waterRate = payload.waterRate;
      })
      .addCase(addWatersThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList.push(payload.waterlist);
        state.dailyDrank += payload.waterVolume;
        console.log(payload);
      })
      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const array = state.today.dailyWaterList;
        const idx = array.findIndex(item => item.id === payload.id);
        if (idx !== -1) {
          array[idx] = payload;
        }
        state.dailyDrank = array.reduce((acc, item) => acc + item.waterVolume, 0);
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = state.today.dailyWaterList.filter(data => data.id !== payload);
        const array = state.today.dailyWaterList;
        state.dailyDrank = array.reduce((acc, item) => acc + item.waterVolume, 0);
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
