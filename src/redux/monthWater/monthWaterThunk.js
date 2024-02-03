import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMonthWater } from 'services/api';

export const getMonthWater = createAsyncThunk(
  'monthWater/getMonthWater',
  async (selectDate, thunkAPI) => {
    // console.log('date1111 :>> ', date1111);
    try {
      const monthWater = await fetchMonthWater(selectDate);
      // console.log(monthWater);
      return monthWater;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
