import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoinDetailsPage from '../pages/CoinDetailsPage'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/coin' element={<CoinDetailsPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default MainRouter