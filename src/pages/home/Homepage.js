import { Slider } from "../../component/common/slider/slider"
import Header from "../../component/header/header"
import HomeCarousel from "../../component/Homecarousel.js/HomeCarousel"
import { ProductSlider } from "../../component/productslider/ProductSlider"

export const Homepage = ()=>{
    return(
        <>
            <Header/>
            {/* <Slider/> */}
            <HomeCarousel/>
            <ProductSlider/>
        </>
    )
}