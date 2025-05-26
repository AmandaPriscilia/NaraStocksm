// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor semua komponen halaman yang akan menjadi rute
import Header from './components/common/header';
import HomePage from './components/home/homepage'; // Pastikan ini diimpor
import Footer from './components/common/footer';
import Prediksi from './prediksi';
import ContactPage from './components/contact/contactPage';

// Pastikan Anda juga mengimpor halaman-halaman ini jika ingin link-nya berfungsi
// import FiturPage from './components/fitur/FiturPage'; // Contoh
// import EducationPage from './components/education/EducationPage'; // Contoh
// import TentangPage from './components/tentang/TentangPage'; // Contoh

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: 'Home', path: '/' }, // Pastikan path ke Home adalah '/'
    { name: 'Fitur', path: '/fitur' },
    { name: 'Education', path: '/education' },
    { name: 'Prediksi', path: '/prediksi' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Router>
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
      <main >
        <Routes>
          {/* Ini yang PENTING: Rute utama '/' akan menampilkan HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/prediksi" element={<Prediksi />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Contoh rute tambahan jika Anda sudah punya komponennya */}
          {/* <Route path="/fitur" element={<FiturPage />} /> */}
          {/* <Route path="/education" element={<EducationPage />} /> */}
          {/* <Route path="/tentang" element={<TentangPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
