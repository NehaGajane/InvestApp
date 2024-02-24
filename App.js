// App.js
import React from 'react';
import TableRow from './Table';
import FetchData from './Fetch';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // const data = (FetchData(), []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='table'>
      <h1>Crypto Market Data</h1>
      <table>
        <thead className='header'>
          <tr className='row'>
            <th className='th'>Icon</th>
            <th className='th'>Name</th>
            <th className='th'>ID</th>
            <th className='th'>Symbol</th>
            <th className='th' style={data.price_change_percentage_24h<0 ? {color:"red"}: {color:"green"}}>Current Price</th>
            <th className='th'>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <TableRow key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
