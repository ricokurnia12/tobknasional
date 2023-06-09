import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full flex items-center justify-between z-50">
      <div className="flex items-center">
        <img
          src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/d741368af533bc53895cfe454fb1df19.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-white font-semibold text-lg">Logo</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Daftar
      </button>
    </nav>
  );
};

export default Navbar;
