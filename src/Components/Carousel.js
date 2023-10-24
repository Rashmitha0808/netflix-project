// import React, { useState } from "react";
// import "../css/Slider.css";
// import Card from "./Card";
// import { GrPrevious, GrNext } from "react-icons/gr";

// function Carousel({ movies }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % movies.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + movies.length) % movies.length);
//   };

//   return (
//     <>
//       <div className="carousel-container">
//         <div className="prev_iconParent">
//           <GrPrevious className="prev_icon" onClick={prevSlide} />
//         </div>
//         <div className="carousel">
//           {movies?.map((movie) => (
//             <Card key={movie?._id} {...movie} className="custom-card-class" />
//           ))}
//         </div>

//         <div className="next_iconParent">
//           <GrNext className="next_icon" onClick={nextSlide} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Carousel;
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Cards/Card";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
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
      removeArrowOnDeviceType={["tablet", "mobile"]}
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
