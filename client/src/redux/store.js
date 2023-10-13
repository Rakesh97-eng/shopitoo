import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productfeautes/productslice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';




const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, productreducer)


export const Store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(Store)
