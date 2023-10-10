import "./slider.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import Customcard from "../card/customcard";
export const Slider = (props) => {
  const { sliderData, slidename } = props;
  const [currentslide, setCurrentslide] = useState(0);
  const [slideimage,setSlideimage] = useState([])
  let sliderlength = sliderData.length - 1;
  const prevSlider = () => {
    currentslide == 0
      ? setCurrentslide(currentslide)
      : setCurrentslide(currentslide - 1);
  };
  const nextSlider = () => {
    currentslide == sliderlength
      ? setCurrentslide(currentslide)
      : setCurrentslide(currentslide + 1);
  };

  const productslide = {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    height: "80vh",
    alignItems: "center",
    flexWrap: "wrap",
    width: "fit-c",
  };

  let productslider = [1,2];
//   let slideimage = [];
  console.log("firsttt",slideimage);
  return (
    <div className="slider">
      <ArrowBackIosNewOutlinedIcon
        className="arrow prev"
        onClick={prevSlider}
      />

      <ArrowForwardIosOutlinedIcon
        className="arrow next"
        onClick={nextSlider}
      />

      {slidename == "product" ? (
        productslider.map((data,index)=>{
          return index == currentslide &&  
          <div style={productslide}>
           {index ==0 && <Customcard sliderdata={sliderData} slidevalue0="0" slidevalue1="5"/>}
           {index ==1 && <Customcard sliderdata={sliderData} slidevalue0="5" slidevalue1="10"/>}
          </div>
        
        })
       
      ) : (
        sliderData.map((slide, index) => {
          const { image, name, description } = slide;

          return (
            <div
              key={index}
              className={index == currentslide ? "slide current" : "slide"}
            >
              {index == currentslide && (
                <>
                  <img src={image}></img>
                  <div className="content">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    <h2>{name}</h2>
                    <h4>{description}</h4>
                    <hr></hr>
                    <button>Shop Now</button>
                  </div>
                </>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
