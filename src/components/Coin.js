import React from 'react'

function Coin({name, icon, price, symbol}) {
  return (
    <div className='coin'>
    <h1>{name}</h1>
    <img src={icon} />
    <h3 id="price">$ {price.toFixed(2) == 0.00 ? 0.01: price.toFixed(2)}</h3>
    <h3 id="symbol"> {symbol} </h3>

    </div>
  )
}



export default Coin