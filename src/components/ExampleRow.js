import './ExampleRow.css';

const ExampleRow = (props) => {
    return (
        <div className='cryptoRow'>
          <div className='cr-rank cell'>{props.rank}</div>
          <div className='cr-name cell'>{props.name}</div>
          <div className='cr-price cell'>{props.price}</div>
          <div className='cr-1hr cell'>{props.oneHr}</div>
          <div className='cr-24h cell'>{props.twentyfourHr}</div>
          <div className='cr-7d cell'>{props.sevenD}</div>
          <div className='cr-vol cell'>{props.vol}</div>
          <div className='cr-mc cell'>{props.mc}</div>
        </div>
    );
}

export default ExampleRow;