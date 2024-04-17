import React from 'react'
import HeroCoins from './HeroCoins'

const Hero = () => {
  return (
    <div className='px-2 h-hero'>
        <h1 className='font-primary text-8xl font-bold pt-[8%] text-center gradient-text mb-8'>Discover Coins</h1>
        <p className='max-w-[580px] mx-auto text-center text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus velit quis nihil. Cumque, eum.</p>
        {/* <img src="images/hero.png" alt="no-img" /> */}
        <HeroCoins/>
    </div>
  )
}

export default Hero