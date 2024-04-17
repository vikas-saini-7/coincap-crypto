import React from 'react';

const CryptoTable = ({ data }) => {
  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table-auto w-full min-h-[550px] bg-orange-900 bg-opacity-5">
        <thead className='text-left '>
          <tr >
            <th className="px-4 py-2 border border-gray-800">Coin</th>
            <th className="px-4 py-2 border border-gray-800">Name</th>
            <th className="px-4 py-2 border border-gray-800">Current Price</th>
            <th className="px-4 py-2 border border-gray-800">Market Cap</th>
            <th className="px-4 py-2 border border-gray-800">24 H Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td className="border border-gray-800 px-4 py-2"><img className='w-10 p-1 inline mr-2' src={coin.image} alt="" /><span className='inline self-center'>{coin.symbol.toUpperCase()}</span></td>
              <td className="border border-gray-800 px-4 py-2">{coin.name}</td>
              <td className="border border-gray-800 px-4 py-2">{`₹${coin.current_price.toLocaleString()}`}</td>
              <td className="border border-gray-800 px-4 py-2">{`₹${coin.market_cap.toLocaleString()}`}</td>
              <td className={`border border-gray-800 px-4 py-2 ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-700'}`}>{coin.price_change_percentage_24h.toLocaleString()}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
