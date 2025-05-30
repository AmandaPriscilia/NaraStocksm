// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // PENTING: Import Link



function Footer() {
  // Definisikan item-item footer dengan path yang sesuai
  const companyLinks = [
    { name: 'Tentang Kami', path: '/tentang' },
    { name: 'Fitur atau Layanan', path: '/fitur' },
    { name: 'Cara Kerja / Proyek', path: '/proyek' }, // Contoh path baru
    { name: 'Tim / Karier', path: '/karir' }, // Contoh path baru
  ];

  const helpLinks = [
    { name: 'Pusat Bantuan', path: '/help-center' }, // Contoh path baru
    { name: 'FAQ', path: '/faq' },
    { name: 'Ketentuan Layanan', path: '/terms' },
    { name: 'Kebijakan Privasi', path: '/privacy' },
  ];

  const resourcesLinks = [
    { name: 'Artikel / Blog', path: '/blog' },
    { name: 'Panduan Investasi Pemula', path: '/education' }, // Mengarahkan ke education
    { name: 'Video Tutorial', path: '/tutorials' },
    { name: 'Partner atau Kolaborasi', path: '/partners' },
  ];

  const socialMediaLinks = [
    // Untuk media sosial, seringkali tetap menggunakan <a> karena mengarah ke situs eksternal
    // Tapi jika Anda memiliki halaman media sosial internal, gunakan Link
    { icon: 'fa-instagram', name: 'Instagram', href: 'https://instagram.com/yourprofile' },
    { icon: 'fa-twitter', name: 'Twitter', href: 'https://twitter.com/yourprofile' },
    { icon: 'fa-youtube', name: 'YouTube', href: 'https://youtube.com/yourchannel' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-lime-500 opacity-10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-6">Perusahaan</h3>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  {/* Gunakan Link jika mengarah ke halaman internal aplikasi */}
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-lime-500 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-xl mb-6">Bantuan</h3>
            <ul className="space-y-4">
              {helpLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-lime-500 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6">Sumber Daya & Edukasi</h3>
            <ul className="space-y-4">
              {resourcesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-lime-500 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-xl mb-6">Kontak & Sosial Media</h3>
            <div className="space-y-4">
              {socialMediaLinks.map((social) => (
                // Untuk link eksternal (media sosial), tetap gunakan <a> tag
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" // Buka di tab baru
                  rel="noopener noreferrer" // Praktik keamanan
                  className="flex items-center space-x-3 text-gray-300 hover:text-lime-500 transition-colors group"
                >
                  <div className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center group-hover:border-lime-500 transition-colors">
                    <i className={`fab ${social.icon} text-lg`}></i>
                  </div>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm italic">© 2025 NARASTOCK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
