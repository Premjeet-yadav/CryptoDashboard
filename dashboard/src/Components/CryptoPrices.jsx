import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoPrices = () => {
  const [bitcoin, setBitcoin] = useState({
    "BTC": {
      "USD": ''
    },
    "ETH": {
      "USD": ''
    },
    "BNB": {
      "USD": ''
    }
  });
  
  const getData = async() => {
    try {
        const res = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB&tsyms=USD&api_key=9e128e91b48ba5037750b68ab8f784fb157b079f3ee4a25efcb91a430127b768`);
        console.log(res.data);
        setBitcoin(res.data);
        console.log(bitcoin)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{color:'white'}} >
    <h1>Cryptocurrency Prices</h1>
    <div style={{ display: 'flex',flexWrap:'wrap', alignItems: 'center', justifyContent: 'center',gap:'20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '10px' }}>
        <div style={{ width: '300px', border: '1px solid #fff', padding: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <img src="https://th.bing.com/th?id=OIP.gYEEYXuJLYw03cV0_ANzcwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" width={40} height={40} alt="bitcoin" />
            <h2>Bitcoin</h2>
          </div>
          <h2>${bitcoin.BTC.USD}</h2>
          <button style={{ backgroundColor: 'Orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Trade</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '10px' }}>
        <div style={{ width: '300px', border: '1px solid #fff', padding: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <img src="https://th.bing.com/th/id/OIP.xH6B20wxKqiUGjoxzWG1jwHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" width={40} height={40} alt="bitcoin" />
            <h2>Etherium</h2>
          </div>
          <h2>${bitcoin.ETH.USD}</h2>
          <button style={{ backgroundColor: 'Orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Trade</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '10px' }}>
        <div style={{ width: '300px', border: '1px solid #fff', padding: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <img src="https://th.bing.com/th/id/OIP.C-X4d-k2y07ssYxuh2TuSAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" width={40} height={40} alt="bitcoin" />
            <h2>Binance</h2>
          </div>
          <h2>${bitcoin.BNB.USD}</h2>
          <button style={{ backgroundColor: 'Orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Trade</button>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default CryptoPrices;
