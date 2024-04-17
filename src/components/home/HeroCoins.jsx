import { IconCoinRupee, IconCoinRupeeFilled, IconCurrencyRupee } from '@tabler/icons-react';
import React from 'react'
import { useSelector } from 'react-redux'

const HeroCoins = () => {
    const coinsData = useSelector(state => state.coin.coinsData);
    const loading = useSelector(state => state.coin.loading);
    return (
        <div className='flex gap-4 mt-[8%] items-center justify-center'>
            {loading && <p>Loading..</p>}
            {coinsData?.slice(0,3).map((item) => (
                <div className='flex items-center gap-6 px-[5%] py-[3%] border border-gray-500 border-opacity-20 bg-opacity-10 rounded'>
                    <img className='w-16 object-contain' src={item.image} alt="" />
                    <div>
                        <h1 className='font-primary text-lg font-bold'>{item.name}</h1>
                        <h1 className='flex items-center gap-1 text-gray-200'> <IconCurrencyRupee/> <span className={`${item.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-700'}`}>{item.current_price}</span></h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroCoins