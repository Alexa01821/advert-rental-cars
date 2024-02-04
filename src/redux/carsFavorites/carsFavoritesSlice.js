import { createSlice } from '@reduxjs/toolkit';

export const carsFavoritesInitialState = {
  favorites: [],
};

export const carsFavoritesSlice = createSlice({
  name: 'favorites',
  initialState: carsFavoritesInitialState,
  reducers: {
    addCarsFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeCarsFavorites: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addCarsFavorites, removeCarsFavorites } =
  carsFavoritesSlice.actions;
export const carsFavoritesReducer = carsFavoritesSlice.reducer;
