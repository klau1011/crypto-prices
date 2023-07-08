import React, {FC} from "react";
import {ICoinProps} from '../Interfaces/Interfaces'

const Coin: FC<ICoinProps> = ({ name, icon, price, symbol }) => {
  return (
    <div className="coin">
      <h1 data-testid='testid-name'>{name}</h1>
      <img src={icon} data-testid='testid-icon' />
      <h3 id="price" data-testid='testid-price'>$ {parseInt(price.toFixed(2)) == 0.0 ? 0.01 : price.toFixed(2)}</h3>
      <h3 id="symbol" data-testid='testid-symbol'> {symbol} </h3>
    </div>
  );
}

export default Coin;
