// TableRow.js
import React from 'react';

const TableRow = ({ data }) => {
  // const { name, id, image, symbol, current_price, total_volume } = data;

  console.log('Received data:', data);

  if (!data) {
    return null; // Handle case where data is not available yet
  }

  return (
    <tr key={data.id}>
      <td className='th'>
        <img src={data.image} alt={data.name} style={{ width: '30px', height: '30px' }} />
      </td>
      <td className='th'>{data.name}</td>
      <td className='th'>{data.id}</td>
      
      <td className='th'>{data.symbol}</td>
      <td className='th'>${data.current_price}</td>
      <td className='th'>${data.total_volume}</td>
    </tr>
  );
};
export default TableRow;
