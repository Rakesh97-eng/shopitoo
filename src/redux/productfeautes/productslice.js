import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductService } from "./productservice";


export const FetchProduct = createAsyncThunk('product/data',async()=>{
    return ProductService.FetchProduct
})


let intialvalue = {
    isLoading:false,
    products:[],
    cartValue:[]
}
export const ProductSlice = createSlice({
    name:"product",
    initialState:intialvalue,
    reducers:{
        addCart:(state,{payload})=>{
           state.cartValue=[...state.cartValue,payload] 
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchProduct.fulfilled,(state,action)=>{
             state.products = action.payload
             return state
        })
        }
})

export const{addCart}= ProductSlice.actions;

export default ProductSlice.reducer;