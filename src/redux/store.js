import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { filtersReducer } from './filters/filtersSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import { appReducer } from './appState/appSlice';
import { carsFavoritesReducer } from './carsFavorites/carsFavoritesSlice';

const carsFavoritesPersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    carsFavorites: persistReducer(
      carsFavoritesPersistConfig,
      carsFavoritesReducer
    ),
    cars: carsReducer,
    filters: filtersReducer,
    appState: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
