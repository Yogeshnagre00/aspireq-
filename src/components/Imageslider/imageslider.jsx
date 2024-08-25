import Slider from "react-slick";
import "./imageSlider.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  const images = [
    "./Images/image 1 (1).png",
    "./Images/testing.jpg",
    "./Images/software resting.jpg",
  ];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
