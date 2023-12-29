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

      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default KeenSliderComponent;
// import React, { useState, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";
// import { banner1, banner2 } from "../helpers/common";

// const Layout = () => {
//   const carouselRef = useRef(null);
//   const [isAutoplay, setIsAutoplay] = useState(true);

//   const toggleAutoplay = () => {
//     setIsAutoplay(!isAutoplay);
//   };

//   return (
//     <div>
//       <Carousel
//         ref={carouselRef}
//         autoPlay={isAutoplay}
//         interval={5000} // Set the interval to 5 seconds
//         stopOnHover={false}
//         showThumbs={false}
//         className="horizontal-carousel"
//       >
//         <div>
//           <img src={banner1} alt="First Banner" />
//         </div>
//         <div>
//           <img src={banner2} alt="Second Banner" />
//         </div>
//       </Carousel>

//       <button onClick={() => carouselRef.current.next()}>Next</button>
//       <button onClick={toggleAutoplay}>{isAutoplay ? "Pause" : "Play"}</button>

//       {/* Other layout components */}
//     </div>
//   );
// };

// export default Layout;
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { banner1, banner2 } from "../helpers/common";

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const slideStyle = {
//     width: "100%",
//     vertical: false, // Set the width to fill the container
//   };
//   return (
//     <div className="container">
//       <Slider {...settings}>
//         <div style={slideStyle}>
//           <img src={banner1} alt="Image 1" />
//         </div>
//         <div style={slideStyle}>
//           <img src={banner2} alt="Image 2" />
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
