import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FetchProduct } from "../../redux/productfeautes/productslice";
import { Slider } from "../common/slider/slider"

export const ProductSlider = ()=>{
    let {products} = useSelector((state)=>state)
    console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(FetchProduct())
    },[])
    return(
        <>
         {/* {products.map((product)=>{
            return <img src={product.image} width="200" height="200"></img>
         })} */}
           <Slider slidename="product" sliderData={products}/>
        </>
    )
}