import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/header';
import HomePage from './components/home/homepage';
import Footer from './components/common/footer';
import Prediksi from './prediksi';
import ContactPage from './components/contact/contactPage';
import TentangPage from './components/tentang/tentangPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Fitur', path: '/fitur' },
    { name: 'Article', path: '/article' },
    { name: 'Prediksi', path: '/prediksi' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Router basename="/NaraStocksm">
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prediksi" element={<Prediksi />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          {/* route lain jika ada */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
