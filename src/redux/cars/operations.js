import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://65ba3ec0b4d53c0665526327.mockapi.io/advert/api';

// GET @ /cars
export const fetchCars = createAsyncThunk(
  'cars/',
  async ({ page = 1 }, thunkAPI) => {
    try {
      const totalLimit = page * 12;
      const { data } = await axios.get('/cars', {
        params: {
          page: 1,
          limit: totalLimit,
        },
      });
      if (!data.length) {
        Notify.info("Sorry, that's all cars for today...", {
          timeout: 2000,
        });
      }
      return data;
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
      const { data } = await axios.get(`/cars/${carId}`);
      if (!data.length) {
        Notify.info('Oops, something went wrong', {
          timeout: 2000,
        });
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
