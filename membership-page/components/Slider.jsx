import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Slider() {
  const slides = [
    {
      url: "/piernas-cruzadas.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/5704127/pexels-photo-5704127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/5876816/pexels-photo-5876816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      url: "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/6246399/pexels-photo-6246399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // previous
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // next
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    // container
    <div className="md:grid lg:max-h-[600px] h-[40vh] w-[60vw]  md:max-w-[700px] 2xl:max-h-[900px] 2xl:h-[60vh] 2xl:max-w-[700px] m-auto relative group shadow-2xl mt-[-15px] gap-x-2 xl:px-8">
      <div
        // link imgs
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 md:absolute"
      ></div>

      {/* Left Arrow */}
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 pl-2 text-white cursor-pointer">
        <ArrowBackIosNewIcon onClick={prevSlide} size={50} />
      </div>
      {/* Right Arrow */}
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 pr-2 text-white cursor-pointer">
        <ArrowForwardIosIcon onClick={nextSlide} size={50} />
      </div>

      {/* point mapping */}
      <div className="flex justify-center pt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-1xl cursor-pointer"
          >
            <FiberManualRecordIcon className="text-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
