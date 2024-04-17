import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getTopCoins } from '../redux/actions/coinActions'
import CryptoTable from '../components/home/CryptoTable'
import TablePagination from '../components/home/TablePagination'
import AiAssistantSection from '../components/home/AiAssistantSection'
import AccordionSection from '../components/home/AccordionSection'
import Footer from '../components/common/Footer'
const HomePage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const coinsData = useSelector(state => state?.coin?.coinsData);
    const loading = useSelector(state => state?.coin?.loading);
      
    // useEffect(() => {
    //   dispatch(getTopCoins(currentPage));
    // }, [currentPage, dispatch]);

    const handlePageChange = page => {
      setCurrentPage(page);
    };

    return (
      <div>
          <Hero/>
          {loading && <p>Loading...</p>}
          {!loading && coinsData &&
          <>
            <CryptoTable data={coinsData?.slice(0, 10)} />
            <TablePagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
            />
          </>
          }
          <div className='h-[120px]'></div>
          <AiAssistantSection/>
          <div className='h-[120px]'></div>
          <AccordionSection/>
          <div className='h-[120px]'></div>
      </div>
    )
}

export default HomePage