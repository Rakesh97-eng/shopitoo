import "./slider.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
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

  const productImageslide = {
    backgroundColor: "white",
    height: "250px",
    width: "280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
            return   index == currentslide &&  <div style={productslide}>
                {data}
            {sliderData.map((slide, index) => {
              const { image, name, description } = slide;
              if( index < (currentslide+1)*5 ){
                console.log("slide",slideimage);
                 if(slideimage.length>0 && slideimage.includes(index)){
                    console.log("cominggg");
                    // setSlideimage(slideimage.shift());
                 }
                 setSlideimage([...slideimage,index]);
                }
                console.log(slideimage);
              return (
                slideimage.length>0 && slideimage.includes(index) && (
                  <div style={productImageslide}>
                    <img src={sliderData[index].image} height="80%" width="80%"></img>
                  </div>
                )
              );
            })}
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
