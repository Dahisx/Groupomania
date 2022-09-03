import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import userReducer from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)

export default configureStore({
  reducer: {
    user: persistedUserReducer,
    posts:postSlice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
  }),
});
