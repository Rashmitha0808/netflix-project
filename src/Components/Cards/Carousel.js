import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
function CarouselReact({ movies }) {
  // if (true) {
  //   return <h1>Card carousel</h1>;
  // }
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerclassName="carousel-container"
      dotListclassName="custom-dot-list-style"
      itemclassName="carousel-item-padding-40-px"
    >
      {movies?.map((movie) => (
        <Card key={movie?._id} {...movie} className="custom-card-class" />
      ))}
    </Carousel>
  );
}
export default CarouselReact;
