import React, { useState } from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../css/Sliders.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Sliders({ movies, deviceType }) {
  console.log(movies);

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={8000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
        customStyle={{ zIndex: 10000 }}
      >
        {movies?.map((movie) => (
          <Card key={movie?._id} {...movie} className="custom-card-class" />
        ))}
      </Carousel>
    </>
  );
}

export default Sliders;
