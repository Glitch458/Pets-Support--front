import { configureStore } from '@reduxjs/toolkit';
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

import { authApi } from './Auth/authApi';
import authReducer from './Auth/authSlice';
import { noticesApi } from './Notices/noticesApi';
import noticesReducer from './Notices/noticesSlice';
import { newsApi } from './News/newsApi';
import newsReducer from './News/newsSlice';
import { userApi } from './User/userApi';
import userReducer from './User/userSlice';
import { friendsApi } from './Friends/friendsApi';
import friendsReducer from './Friends/friendsSlice';
import { userPetsApi } from './User/userPetsApi';

import { setupListeners } from '@reduxjs/toolkit/query';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [userPetsApi.reducerPath]: userPetsApi.reducer,
    auth: persistedUserReducer,
    notices: noticesReducer,
    news: newsReducer,
    user: userReducer,
    friends: friendsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(noticesApi.middleware)
      .concat(newsApi.middleware)
      .concat(userApi.middleware)
      .concat(friendsApi.middleware)
      .concat(userPetsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
