import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productfeautes/productslice"

export const Store = configureStore({
    reducer:productreducer
})