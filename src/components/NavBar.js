import './NavBar.css';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper';

// Import Swiper styles
import 'swiper/css';


const Movers = (props) => {

    return (
        <>
            { props.coins.map((coin) => {
                let cStyle;

                if(coin.price_change_percentage_24h_in_currency > 0)
                    cStyle =  { color: 'green', marginRight: '1rem' };
                else cStyle = { color: 'red', marginRight: '1rem' };

                return (
                    <span style={cStyle}>
                        { coin.symbol.toUpperCase()+': '+coin.current_price }
                    </span>
    
                )
            })}
        </>
    );
}


const NavBar = (props) => {

    return(
        <div className='navbar'>
            <h1>Coindog</h1>
            <p style={{width: '90%', margin: 'auto', marginTop: '1rem'}}>
            <Marquee gradient={false}>
                <Movers coins={props.marquee} />
            </Marquee>
            </p>
      
      {/*
            <div className='swiperContainer'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 5000,
                  }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><div className='swiperSlide'>Slide 1</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 2</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 3</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 4</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 5</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 6</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 7</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 8</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 9</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 10</div></SwiperSlide>
                <SwiperSlide><div className='swiperSlide'>Slide 11</div></SwiperSlide>
            </Swiper>            
            </div>
                */}
        </div>
      );
}


export default NavBar;