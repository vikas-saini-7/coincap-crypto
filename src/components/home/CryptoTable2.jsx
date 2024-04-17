import React from 'react';

const CryptoTable = ({ cryptoData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Name</th>
            <th className="w-1/3 px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Current Price</th>
            <th className="px-4 py-2">Market Cap</th>
            {/* Add more headers based on the data you want to display */}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {cryptoData.map((coin) => (
            <tr key={coin.id}>
              <td className="border px-4 py-2">{coin.name}</td>
              <td className="border px-4 py-2">{coin.symbol.toUpperCase()}</td>
              <td className="border px-4 py-2">{`₹${coin.current_price.toLocaleString()}`}</td>
              <td className="border px-4 py-2">{`₹${coin.market_cap.toLocaleString()}`}</td>
              {/* Add more data cells based on the data you want to display */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
