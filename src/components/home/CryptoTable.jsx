import React from 'react';

const CryptoTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Current Price</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">Total Volume</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(key => (
            <tr key={data[key].id}>
              <td className="border px-4 py-2">{data[key].name}</td>
              <td className="border px-4 py-2">{data[key].symbol}</td>
              <td className="border px-4 py-2">{data[key].current_price}</td>
              <td className="border px-4 py-2">{data[key].market_cap}</td>
              <td className="border px-4 py-2">{data[key].total_volume}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
