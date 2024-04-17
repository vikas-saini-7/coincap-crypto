import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconHeart, IconHeartFilled } from '@tabler/icons-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 bg-opacity-10 text-white p-4 pb-8">
      <div className='container flex flex-col items-center justify-center lg:justify-start mx-auto mb-8'>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
            <span className="text-2xl gradient-text font-bold font-primary">CryptoCap</span>
        </div>
        <p className='mt-2 text-gray-500'>Discover the Future of Finance: Explore Top Coins and Dive Into Their Insights</p>
        <div className='flex items-center gap-4 mt-8'>
          <IconBrandInstagram size={32}/>
          <IconBrandGithub size={32}/>
          <IconBrandLinkedin size={32}/>
        </div>
      </div>
      <div className="container border-t text-gray-500 border-gray-500 border-opacity-10 pt-4 text-center mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className='flex gap-2'><span>Made with </span><IconHeartFilled className='text-red-500'/> <span>in india</span></div>
        <div className="mt-4 lg:mt-0">
          <p>© {new Date().getFullYear()} CryptoCap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
