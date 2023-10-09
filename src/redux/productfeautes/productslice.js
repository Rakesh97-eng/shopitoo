import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductService } from "./productservice";


export const FetchProduct = createAsyncThunk('product/data',async()=>{
    return ProductService.FetchProduct
})


let intialvalue = {
    isLoading:false,
    products:[]
}
export const ProductSlice = createSlice({
    name:"product",
    initialState:intialvalue,
    extraReducers:(builder)=>{
        builder.addCase(FetchProduct.fulfilled,(state,action)=>{
             state.products = action.payload
             return state
        })
        }
})

export default ProductSlice.reducer;