import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65ba3ec0b4d53c0665526327.mockapi.io/advert/api';

// GET @ /cars
export const fetchCars = createAsyncThunk(
  'cars/',
  async ({ limit = 12, page }, thunkAPI) => {
    try {
      const response = await axios.get('/cars', {
        params: {
          limit,
          page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /cars/:id
export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
