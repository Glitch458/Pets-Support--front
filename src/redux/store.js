import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './Auth/authApi';
import authReducer from './Auth/authSlice';
import { noticesApi } from './Notices/noticesApi';
import noticesReducer from './Notices/noticesSlice';

import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistUserConfig = {
  key: 'user',
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [authApi.reducerPath]: authApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    notices: noticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(noticesApi.middleware)
      .concat(noticesApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
