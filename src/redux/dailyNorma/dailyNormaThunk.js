import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getDailyNormaData, updateDailyNormaData } from '../../services/api';
import { fetchDailyNorma, newDailyNorma } from '../../services/api';

export const getDailyNorma = createAsyncThunk('auth/getDailyNorma', async ({ id }, { rejectWithValue }) => {
  try {
    const dailyNorma = await fetchDailyNorma({ id });
    return dailyNorma;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateDailyNorma = createAsyncThunk(
  'auth/updateDailyNorma',
  async (updatedData, { rejectWithValue }) => {
    try {
      const updatedUser = await newDailyNorma(updatedData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
