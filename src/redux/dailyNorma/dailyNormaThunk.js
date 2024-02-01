// dailyNormaThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDailyNormaData, updateDailyNormaData } from 'services/api';

// export const getDailyNorma = createAsyncThunk(
//   'auth/getDailyNorma',
//   async (_, thunkAPI) => {
//     try {
//       const data = await getDailyNormaData();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateDailyNorma = createAsyncThunk(
//   'auth/updateDailyNorma',
//   async (userData, thunkAPI) => {
//     try {
//       await updateDailyNormaData(userData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getDailyNorma = createAsyncThunk('auth/getDailyNorma', async ({ id, _id }, { rejectWithValue }) => {
  try {
    const response = await getDailyNormaData({ id, _id });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateDailyNorma = createAsyncThunk('auth/updateDailyNorma', async ({ id, _id, userData }, { rejectWithValue }) => {
  try {
    const response = await updateDailyNormaData({ id, _id, userData });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});