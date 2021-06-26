import './Coin.css';

const Coin = ({ type, color }) => {
    return(
        <div className='coin' style={{color: color}}>
            <p>
                <span className='coin__logo'><i className='fas fa-coins'></i></span>
                <span className='coin__type'>{type}</span>
            </p>
        </div>
    );
}

export default Coin;