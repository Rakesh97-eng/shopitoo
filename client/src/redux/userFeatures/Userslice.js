import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "./Userservice";


export const FetchUser = createAsyncThunk('user/data',async()=>{
    return Login
})


let intialvalue = {
    isLoading:false,
   
}
export const UserSlice = createSlice({
    name:"User",
    initialState:intialvalue,
  
    extraReducers:(builder)=>{
        builder.addCase(FetchUser.fulfilled,(state,action)=>{
             console.log("loginstate",action);
        })
        }
})


export default UserSlice.reducer;