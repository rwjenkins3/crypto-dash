import './CryptoCard.css';



const CryptoCard = (props) => {

  let fontOverride;

  if(props.rank.valueOf() < 10) {
    fontOverride = 'reg_rank';
  } else {
    fontOverride = 'sml_rank';
  }

    return (
        <div className='my-class'>
          <div className='left'>
            <div className='rank_container'><p className={fontOverride}>#{props.rank}</p></div>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p className='price'>${props.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}</p>
          </div>
          <div className='right'>
            <div className='right_row_top_container'>
              <p>Market Cap</p>
              <p>{props.mc}</p>
              <p>Volume</p>
              <p>{props.vol}</p>
            </div>
            <div className='right_row_container'>
              <div className='right_row'>
                <div className='right_row_item'>1hr Change</div>
                <div className='right_row_item'>24hr Change</div>
                <div className='right_row_item'>7 day Change</div>
              </div>
              <div className='right_row'>
                <div className='right_row_data'>{ Math.round(props.oneHr * 100) / 100 }%</div>
                <div className='right_row_data'>{ Math.round(props.twentyfourHr * 100) / 100 }%</div>
                <div className='right_row_data'>{ Math.round(props.sevenD * 100) / 100 }%</div>
              </div>
            </div>
          </div>
        </div>

    );

}


export default CryptoCard;