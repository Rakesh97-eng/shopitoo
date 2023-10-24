import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productreducer from "./productfeautes/productslice";
import Userreducer from "./userFeatures/Userslice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}
// const persistedReducer =

const rootreducer = combineReducers({
  product: persistReducer(persistConfig, productreducer),
  user:Userreducer
})


export const Store = configureStore({
    reducer:rootreducer
})

export const persistor = persistStore(Store)
