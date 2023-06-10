import React from 'react';
import Logo from '../../assets/logonavbar.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 w-full flex items-center justify-between z-50">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Ganesha Operation"
          // sizes='16px'
          className="w-20 h-8 sm:w-24 sm:h-8"
        />
        <span className="text-white font-semibold text-lg">Logo</span>
      </div>
      <button className="bg-primary hover:bg-red-600 text-white text-sm sm:font-semibold p-1 md:py-2 md:px-4 rounded">
        Daftar TOBK Nasional
      </button>
    </nav>
  );
};

export default Navbar;
