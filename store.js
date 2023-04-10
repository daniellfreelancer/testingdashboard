import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import reloadSlice from "./features/reloadSlice";
import userReducer from "./features/userApi";
import storage from "redux-persist/lib/storage";
import loginAPI from "./features/loginAPI";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, userReducer)



export const store = configureStore({
    reducer:{
        auth: persistedReducer,
        [loginAPI.reducerPath]: loginAPI.reducer,
        reload: reloadSlice,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(loginAPI.middleware)
})


// setupListeners(store.dispatch)
// export default store
export const persistor = persistStore(store)