import { createSlice } from '@reduxjs/toolkit';
import { fetchFilters } from './operations';
import { handleFulfilled } from './filtersHelpers';

export const filtersInitialState = {
  filters: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  extraReducers: builder => {
    builder.addCase(fetchFilters.fulfilled, handleFulfilled);
  },
});

export const filtersReducer = filtersSlice.reducer;
