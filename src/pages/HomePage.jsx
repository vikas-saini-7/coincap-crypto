import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getTopCoins } from '../redux/actions/coinActions'
import CryptoTable from '../components/home/CryptoTable'
import CryptoTable2 from '../components/home/CryptoTable2'
const HomePage = () => {
    const dispath = useDispatch()
    const coinsData = useSelector(state => state.coin.coinsData);
    const loading = useSelector(state => state.coin.loading);
  
    // useEffect(() => {
    //     dispath(getTopCoins())
    //   }, []);

  return (
    <div>
        <Hero/>
        <CryptoTable data={coinsData} />
        <CryptoTable2 cryptoData={coinsData} />
    </div>
  )
}

export default HomePage