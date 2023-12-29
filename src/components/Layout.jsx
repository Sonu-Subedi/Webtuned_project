import React, { useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { banner1, banner2 } from "../helpers/common";

const KeenSliderComponent = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slidesPerView: 1,
      loop: true,
      duration: 500,
      slideChanged(s) {
        console.log("slide changed", s.details().relativeSlide);
      },
    },
    []
  );

  const handleNextSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  useEffect(() => {
    const handleNextSlide = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    };

    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [instanceRef, handleNextSlide]);

  return (
    <div className="keen-slider-container">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <img src={banner1} alt="Slide 1" />
        </div>
        <div className="keen-slider__slide">
          <img src={banner2} alt="Slide 2" />
        </div>
      </div>

      <button onClick={handleNextSlide} className="nextbutton">
        Next
      </button>
    </div>
  );
};

export default KeenSliderComponent;
