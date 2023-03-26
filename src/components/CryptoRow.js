import './CryptoRow.css';

const CryptoRow = (props) => {

  let ohStyle, tfhStyle, sdStyle;
  
  if(props.oneHr < 0) {
    ohStyle = { color: 'red' };
  } else {
    ohStyle = { color: 'green' };
  }

  if(props.twentyfourHr < 0) tfhStyle = { color: 'red' }; else tfhStyle = { color: 'green' };
  if(props.sevenD < 0) sdStyle = { color: 'red' }; else sdStyle = { color: 'green' };

  
    return(
        <div className='cryptoRow'>
          <div className='cr-rank cell'>{props.rank}</div>
          <div className='cr-name cell'>
            <div>
              <img src={props.image} alt={props.name} />
              <div className='cr-longName'>{props.name}</div>
            </div>
            <div>{props.symbol.toUpperCase()}</div>
          </div>
          <div className='cr-price cell'>${props.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}</div>
          <div className='cr-1hr cell' style={ohStyle}>
            { Math.round(props.oneHr * 100) / 100 }%
          </div>
          <div className='cr-24h cell' style={tfhStyle}>
            { Math.round(props.twentyfourHr * 100) / 100 }%
          </div>
          <div className='cr-7d cell' style={sdStyle}>
            { Math.round(props.sevenD * 100) / 100 }%
          </div>

          <div className='cr-vol cell'>${props.vol.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
          <div className='cr-mc cell'>${props.mc.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>

        </div>
    );
}

export default CryptoRow;