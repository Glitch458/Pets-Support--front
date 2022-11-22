import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './Auth/authApi';
import authReducer from './Auth/authSlice';
import { noticesApi } from './Notices/noticesApi';
import noticesReducer from './Notices/noticesSlice';
import { newsApi } from './News/newsApi';
import newsReducer from './News/newsSlice';

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

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedUserReducer,
    [authApi.reducerPath]: authApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    notices: noticesReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(noticesApi.middleware)
      .concat(newsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
