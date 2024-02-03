import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';
import { handleFulfilledAll, handleFulfilledById } from './carsHelpers';

export const carsInitialState = {
  cars: [],
  carById: {},
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFulfilledAll)

      .addCase(fetchCarById.fulfilled, handleFulfilledById);
  },
});

export const carsReducer = carsSlice.reducer;
