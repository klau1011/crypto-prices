import Axios from "axios";
import React, {useState, useEffect } from "react";
import "./App.css";
import Coin from "./components/Coin";
import {ICoinProps} from './Interfaces/Interfaces'

function App() {
  useEffect(() => {
    document.title = "Crypto Prices";
  }, []);

  //coin data
  const [listOfCoins, setListOfCoins] = useState<Object []>([]);
  //search state
  const [search, setSearch] = useState<string>("");
  //dropdown selected state
  const [selected, setSelected] = useState<string>("");

  //initalize
  let preFilter = listOfCoins;

  //sort depending on what the selected value is (dropdown)
  if (selected === "PriceLH") {
    preFilter = listOfCoins.sort((a, b) => {
      return (a as ICoinProps).price - (b as ICoinProps).price;
    });
  } else if (selected === "PriceHL") {
    preFilter = listOfCoins.sort((a, b) => {
      return (b as ICoinProps).price - (a as ICoinProps).price;
    });
  } else if (selected === "Alphabetical") {
    preFilter = listOfCoins.sort((a, b) => {
      return (a as ICoinProps).name < (b as ICoinProps).name ? -1 : 1;
    });
  } else if (selected === "Popularity") {
    preFilter = listOfCoins.sort((a: any, b:any) => {
      return a.rank - b.rank;
    });
  }

  const filtered = preFilter.filter((coin) => {
    //filter if search lowercase with spaces removed is contained in space removed coin name
    return (coin as ICoinProps).name
      .toLowerCase()
      .replace(/ /g, "")
      .includes(search.toLowerCase().replace(/ /g, ""));
  });

  //useEffects run immedatiely when the page rerenders
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => setListOfCoins(response.data.coins)
    );
  }, []);

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Crypto Price Tracker</h1>
          {/* search bar */}
          <input
            className="searchBar"
            type="text"
            placeholder="Search for a crypto..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        {/* dropdown select */}
        <section id="header-container">
          <select
            onChange={(event) => {
              setSelected(event.target.value);
            }}
          >
            <option value="Select" disabled>
              Sort by:
            </option>
            <option value="Popularity">Popularity</option>
            <option value="PriceLH">Price: Low to High</option>
            <option value="PriceHL">Price: High to Low</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </section>
        {/* grid -> output msg if theres no stuff in the array*/}
        <div className="display">
          {filtered.length > 0
            ? filtered.map((coin) => {
                return (
                  <Coin
                    name={(coin as ICoinProps).name}
                    icon={(coin as ICoinProps).icon}
                    price={(coin as ICoinProps).price}
                    symbol={(coin as ICoinProps).symbol}
                  />
                );
              })
            : `No cryptos matching '${search}'`}
        </div>
      </div>
      <footer>Developed by Kevin Lau</footer>
    </>
  );
}

export default App;

//AXIOS
