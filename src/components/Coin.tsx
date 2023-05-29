import React from "react";

interface CoinProps {
  name: string;
  icon: string;
  price: number;
  symbol: string;
}

function Coin({ name, icon, price, symbol }: CoinProps) {
  return (
    <div className="coin">
      <h1>{name}</h1>
      <img src={icon} />
      <h3 id="price">$ {price.toFixed(2) == 0.0 ? 0.01 : price.toFixed(2)}</h3>
      <h3 id="symbol"> {symbol} </h3>
    </div>
  );
}

export default Coin;
