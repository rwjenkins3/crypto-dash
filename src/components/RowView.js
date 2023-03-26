import './RowView.css';
import CryptoRow from './CryptoRow';


const RowView = (props) => {

    return (
        <>
        
            <div className='cryptoRow'>
                <div className='headingCell cr-rank'>Rank</div>
                <div className='headingCell cr-name'>Name</div>
                <div className='headingCell cr-price'>Price</div>
                <div className='headingCell cr-1hr'>1hr</div>
                <div className='headingCell cr-24h'>24hr</div>
                <div className='headingCell cr-7d'>7d</div>
                <div className='headingCell cr-vol'>Volume</div>
                <div className='headingCell cr-mc'>Market Cap</div>
            </div>

            {
            props.coins.map((coin) => {
                return (
                <CryptoRow
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



export default RowView;