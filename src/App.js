import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import RowView from './components/RowView';
import CardView from './components/CardView';

// import Carousel from './components/Carousel';
import Marquee from 'react-fast-marquee';

import { Swiper, SwiperSlide } from 'swiper/react';


function App() {

  const [ compact, setCompact ] = useState(null);
  const [ data, setData ] = useState(null);
  const [ bigMovers, setBigMovers ] = useState([]);

  const cryptoUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  useEffect( () => {
    // Setting up our resize handler
    function handleResize() {
      let width = window.innerWidth;

       if( width < 768 ) {
         setCompact(true);
       } else {
         setCompact(false);
       }
    }

    window.addEventListener('resize', handleResize);

    // Get current price data
    const getPrices = async () => {
      const response = await axios.get(cryptoUrl);
      setData(response.data);

      // todo: Add calculations to setBigMovers. Build a string for Marquee
      let big = [];
      data.map((datum, index) => {
        if(Math.abs(datum.price_change_percentage_24h_in_currency) > 3)
          return big.push(datum);
        else return ('');
      });
      setBigMovers(big);
    };

    getPrices();


    return () => window.removeEventListener('resize', handleResize);

  }, [compact, data] );


  if(!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }


  return (
    <div className='app'>

    <Layout>
      <NavBar marquee={bigMovers} />
      




        <div className='cr-container'>

            { compact ? (<CardView coins={data} />) : (<RowView coins={data} />) }
            
        </div>


      <Footer />
    </Layout>

    </div>
  );
}

export default App;
