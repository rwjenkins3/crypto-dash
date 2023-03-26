import './CardView.css';
import CryptoCard from './CryptoCard';

import { useState, useEffect } from 'react';


const CardView = (props) => {

    const [ search, setSearch ] = useState(null);
    const [ coins, setCoins ] = useState(props.coins);

    const ourFilter = (value) => {
        return value.name.includes(search);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value === '') setCoins(props.coins);
            else setCoins(props.coins.filter(ourFilter));
    }

    return (
        <>
        <input type="text" value={search} onChange={(e) => {handleChange(e)}} />
        
        {
            coins.map((coin) => {
                return (
                <CryptoCard
                    rank={coin.market_cap_rank}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    oneHr={coin.price_change_percentage_1h_in_currency}
                    twentyfourHr={coin.price_change_percentage_24h_in_currency}
                    sevenD={coin.price_change_percentage_7d_in_currency}
                    vol={coin.total_volume}
                    mc={coin.market_cap}
                />
                )
            })
        }

        </>

    );
}



export default CardView;