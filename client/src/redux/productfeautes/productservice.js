import axios from "axios";

const FetchProduct = axios.get("https://fakestoreapi.com/products").then((res)=>res.data).catch((err)=>console.log(err))

export const ProductService = {FetchProduct}