import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoPrices.css';

const CryptoPrices = () => {
  const [bitcoin, setBitcoin] = useState({
    "USD": {
      "code": "",
      "symbol": "",
      "rate": "",
      "description": "",
      "rate_float": ""
    },
    "GBP": {
      "code": "",
      "symbol": ";",
      "rate": "",
      "description": "",
      "rate_float": ""
    },
    "EUR": {
      "code": "",
      "symbol": ";",
      "rate": "",
      "description": "",
      "rate_float": ""
    }
  });
  
  const getData = async() => {
    try {
        const res = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
        setBitcoin(res.data.bpi);
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div className="crypto-cards">
        <div className="crypto-card">
          <div className="crypto-info">
            <h2>United State Dollar</h2>
            <h2>${bitcoin.USD.rate}</h2>
            <button>Trade</button>
          </div>
        </div>
        <div className="crypto-card">
          <div className="crypto-info">
            <h2>Pound Sterling</h2>
            <h2>£{bitcoin.GBP.rate}</h2>
            <button>Trade</button>
          </div>
        </div>
        <div className="crypto-card">
          <div className="crypto-info">
            <h2>Binance</h2>
            <h2>€{bitcoin.EUR.rate}</h2>
            <button>Trade</button>
          </div>
        </div>
      </div>
      
  );
};

export default CryptoPrices;

