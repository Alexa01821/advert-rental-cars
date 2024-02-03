import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// GET @ /cars
export const fetchFilters = createAsyncThunk(
  'filters/',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
