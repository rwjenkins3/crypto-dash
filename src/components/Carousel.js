import './Carousel.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
    
    return (
        <div className='swiper-container'>
        <Slider {...settings}>
          <div className='slide'>
            <p>Slide 1</p>
          </div>
          <div className='slide'>
            <p>Slide 2</p>
          </div>
          <div className='slide'>
            <p>Slide 3</p>
          </div>
          <div className='slide'>
            <p>Slide 4</p>
          </div>
          <div className='slide'>
            <p>Slide 5</p>
          </div>
          <div className='slide'>
            <p>Slide 6</p>
          </div>
          <div className='slide'>
            <p>Slide 7</p>
          </div>
        </Slider>
      </div>

    );
}


export default Carousel;