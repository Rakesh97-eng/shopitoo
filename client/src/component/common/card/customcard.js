// const Customcard = (props)=>{
//     let  {sliderdata,slidevalue0,slidevalue1}=props;
//     const productImageslide = {
//         backgroundColor: "white",
//         height: "250px",
//         width: "280px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       };

//     return (
//         <>

//             {sliderdata.map((slide,i)=>{
//                 return i>= slidevalue0 && i<slidevalue1 && <div  style={productImageslide}><img src={slide.image} height="80%" width="80%"></img></div>
//             })}

//         </>
//     )
// }

// export default Customcard;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/productfeautes/productslice";
import { Sucessmessage } from "../toaster/Toaster";

export default function     Customcard(props) {
  let { sliderdata, slidevalue0, slidevalue1 } = props;
  const dispatch = useDispatch();
  const productImageslide = {
    backgroundColor: "white",
    height: "250px",
    width: "280px",
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    justifyContent: "center",
  };

  const handleClick = (slidevalue)=>{
    dispatch(addCart(slidevalue))
    Sucessmessage("Added to cart")
  }

  return (
    <>
      {sliderdata.map((slide, i) => {
        return (
          i >= slidevalue0 &&
          i < slidevalue1 && (
            <Card sx={{ minWidth: 275 }} style={productImageslide}>
              <img src={slide.image} height="50%" width="50%"></img>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                 {slide.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>handleClick(slide)}>Add Cart</Button>
              </CardActions>
            </Card>
          )
        );
      })}
    </>
  );
}
