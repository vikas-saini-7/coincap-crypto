import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
          <span className="text-xl font-bold">CryptoDash</span>
          <nav className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <a href="/markets" className="hover:underline">Markets</a>
            <a href="/news" className="hover:underline">News</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Services</a>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <div className="mt-4 lg:mt-0">
          <p>© {new Date().getFullYear()} CryptoDash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
