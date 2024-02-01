import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';
import {
  handleFulfilledAll,
  handleFulfilledById,
  handlePending,
  handleRejected,
} from './carsHelpers';

export const carsInitialState = {
  cars: [],
  carById: {},
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilledAll)
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, handleFulfilledById)
      .addCase(fetchCarById.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
