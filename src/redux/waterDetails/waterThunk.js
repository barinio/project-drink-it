import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchTodayWater,
  addWaters,
  editWater,
  deleteWater,
} from 'services/api';
import { toast } from 'react-toastify';

export const getTodayWater = createAsyncThunk(
  'water/getTodayWater',
  async (_, thunkAPI) => {
    try {
      const water = await fetchTodayWater();
      console.log(water);
      return water;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addWatersThunk = createAsyncThunk(
  'water/addWater',
  async (newWater, { rejectWithValue }) => {
    try {
      const data = await addWaters(newWater);
      console.log(data);
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(`You can't add water at the same time twice`);
          return rejectWithValue(error.message);
        case 400:
          toast.warning(`You must write at least 1 ml.`);
          return rejectWithValue(error.message);
        default:
          return rejectWithValue(error.message);
      }
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  'water/editWater',
  async ({ _id, waterVolume, date }, { rejectWithValue }) => {
    try {
      const newWaterUser = { waterVolume, date };
      const response = await editWater({ newWaterUser, id: _id });
      return response;
    } catch (error) {
      if (error.response.status === 400) {
        toast.warning(`You must write at least 1 ml.`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (id, { rejectWithValue }) => {
    try {
      deleteWater(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
