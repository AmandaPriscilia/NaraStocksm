// components/common/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Pastikan path ke logo ini benar!

function Header({ menuOpen, toggleMenu, setMenuOpen, menuItems }) {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black w-full sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center flex-shrink-0">
            {/* Menggunakan Link untuk logo/judul agar mengarahkan ke Home */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center group"
              aria-label="Narastock Home"
            >
              <div className="relative">
                {/* Logo utama */}
                <img
                  alt="Narastock - Prediksi Saham Akurat"
                  className="h-10 w-auto rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                  src={logo}
                  draggable={false}
                />

                {/* Efek subtle glow saat hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Teks brand (opsional) */}
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#7CFF36] to-[#3AAE5F] bg-clip-text text-transparent">
                Narastock
              </span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center mx-4">
            <ul className="flex space-x-4 lg:space-x-8 text-white  text-sm select-none">
              {/* Loop untuk menu desktop */}
              {menuItems.map((item) => (
                <li key={item.name}>
                  {' '}
                  {/* Item sekarang objek, jadi gunakan item.name */}
                  <Link
                    to={item.path} // Menggunakan item.path dari objek menuItems
                    className="hover:text-[#9fff4a] transition-colors duration-300 relative group"
                    onClick={() => setMenuOpen(false)} // Tutup menu saat klik
                  >
                    {item.name} {/* Tampilkan item.name */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9fff4a] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:hidden text-white p-2" onClick={toggleMenu}>
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
            <button className="hidden md:block bg-gradient-to-b from-gray-700 to-black text-white text-xs sm:text-sm rounded-md px-3 sm:px-4 py-2 shadow-md hover:from-gray-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 mt-16 bg-gray-900 bg-opacity-90">
          <div className="bg-gray-900 px-4 py-6">
            <ul className="space-y-4 text-white text-sm">
              {/* Loop untuk menu mobile */}
              {menuItems.map((item) => (
                <li key={item.name}>
                  {' '}
                  {/* Item sekarang objek, jadi gunakan item.name */}
                  <Link
                    to={item.path} // Menggunakan item.path dari objek menuItems
                    className="block hover:text-[#9fff4a] transition-colors py-2 px-4 rounded hover:bg-gray-800"
                    onClick={() => setMenuOpen(false)} // Tutup menu saat klik
                  >
                    {item.name} {/* Tampilkan item.name */}
                  </Link>
                </li>
              ))}
              <li className="pt-4 px-4">
                <button className="w-full bg-gradient-to-b from-gray-700 to-black text-white text-sm  rounded-md px-4 py-2 shadow-md hover:from-gray-600 hover:to-gray-900 transition-all duration-300">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
