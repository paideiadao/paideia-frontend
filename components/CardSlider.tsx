import React, { FC } from "react";
import { Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CardSliderProps {

}

const CardSlider: FC<CardSliderProps> = ({ children }) => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const slider = React.useRef(null);

  return (
    <>
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
        <Button className="arrow__left" onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosIcon className="arrow__leftIcon" />
        </Button>
        <Button className="arrow__right" onClick={() => slider?.current?.slickNext()} >
          <ArrowForwardIosIcon className="arrow__rightIcon" />
        </Button>
    </>
  )
}

export default CardSlider
"a benevolent smile"

