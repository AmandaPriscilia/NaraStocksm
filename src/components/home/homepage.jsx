// components/home/homepage.jsx
import React from 'react';
import heroImage from '../../assets/homenarastock.png';
import useHomePresenter from './homepresenter';

function HomePage() {
  const { handleMulaiPrediksiClick } = useHomePresenter();

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-16 sm:top-32 right-8 sm:right-16 w-4 sm:w-6 h-4 sm:h-6 bg-lime-500 opacity-20 rounded-full animate-float"></div>
        <div className="absolute top-32 sm:top-48 left-6 sm:left-12 w-3 sm:w-4 h-3 sm:h-4 bg-gray-400 opacity-30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-48 sm:top-72 right-16 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 bg-lime-500 opacity-15 rounded-full animate-float animation-delay-1000"></div>

        <div className="text-center">
          <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
            Prediksi Pasar Saham Mingguan Untuk
          </h1>
          <h2 className="italic font-bold text-2xl sm:text-4xl lg:text-5xl mt-1 leading-tight text-lime-500">
            Investor Pemula
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg mt-4 max-w-xl mx-auto opacity-90">
            Mudahkan keputusan investasi Anda dengan prediksi yang sederhana, akurat, dan mudah
            dipahami.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <i className="fas fa-shield-alt text-lime-500"></i>
            <span>Terpercaya</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-chart-line text-lime-500"></i>
            <span>Akurasi Tinggi</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button
            className="w-full sm:w-auto bg-lime-500 text-black font-bold rounded-full px-6 py-3 shadow-[0_20px_40px_rgba(159,255,74,0.4)] hover:shadow-[0_25px_50px_rgba(159,255,74,0.5)] transition-all duration-300 transform hover:scale-105"
            onClick={handleMulaiPrediksiClick} // Panggil fungsi lokal di HomePage
          >
            <i className="fas fa-rocket mr-2"></i>
            Mulai Prediksi
          </button>
          <button className="w-full sm:w-auto bg-white text-black font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-xl border-2 border-lime-500 hover:bg-lime-500 transition-all duration-300">
            <i className="fas fa-play mr-2"></i>
            Pelajari Fitur
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-8 sm:mt-12 mx-auto max-w-[577px]">
          <img
            src={heroImage}
            alt="Stock monitor"
            className="w-full rounded-3xl shadow-2xl object-cover aspect-video"
            draggable={false}
            loading="lazy"
          />
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="bg-[#e8e8e8] py-16 sm:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-300 to-transparent opacity-30 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-gray-300 to-transparent opacity-20 rounded-full translate-x-24 translate-y-24"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-6">
              Why Choose Insight
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fff4a] via-[#7dd83f] to-[#5cb82e]">
                NaraStock App
              </span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              NARASTOCK adalah platform prediksi pasar berbasis data yang membantu pengguna memahami
              pergerakan USD/EUR secara real-time melalui analisis machine learning, grafik
              interaktif, dan insight terkini—memberikan keputusan finansial yang lebih cerdas dan
              terarah.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-4 italic">
              "Satu Pandangan, Seribu Peluang — Powered by NARASTOCK"
            </p>
          </div>

          {/* Features Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-400 h-full hidden lg:block"></div>

            {/* Feature 1: Accuracy */}
            <div className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-20">
              <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right mb-8 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-end mb-4">
                  <i className="fas fa-quote-left text-2xl text-gray-400 mr-3"></i>
                  <h3 className="font-bold text-2xl sm:text-3xl text-black">Accuracy</h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Menggunakan machine learning untuk memberikan prediksi otomatis dan berbasis data
                </p>
              </div>

              {/* Central Icon */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg mb-8 lg:mb-0">
                <i className="fas fa-bullseye text-2xl sm:text-3xl text-black"></i>
              </div>

              <div className="lg:w-1/2 lg:pl-12"></div>
            </div>

            {/* Feature 2: Integration */}
            <div className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-20">
              <div className="lg:w-1/2 lg:pr-12"></div>

              {/* Central Icon */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg mb-8 lg:mb-0">
                <i className="fas fa-cogs text-2xl sm:text-3xl text-black"></i>
              </div>

              <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <h3 className="font-bold text-2xl sm:text-3xl text-black">Integration</h3>
                  <i className="fas fa-quote-right text-2xl text-gray-400 ml-3"></i>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Integrasi langsung dengan data historis dari yfinance tanpa biaya.
                </p>
              </div>
            </div>

            {/* Feature 3: User-friendly */}
            <div className="relative flex flex-col lg:flex-row items-center mb-16 lg:mb-20">
              <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right mb-8 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-end mb-4">
                  <i className="fas fa-quote-left text-2xl text-gray-400 mr-3"></i>
                  <h3 className="font-bold text-2xl sm:text-3xl text-black">User-friendly</h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Antarmuka sederhana dan user-friendly, cocok untuk pemula.
                </p>
              </div>

              {/* Central Icon */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg mb-8 lg:mb-0">
                <i className="fas fa-user-friends text-2xl sm:text-3xl text-black"></i>
              </div>

              <div className="lg:w-1/2 lg:pl-12"></div>
            </div>

            {/* Feature 4: Modernity */}
            <div className="relative flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12"></div>

              {/* Central Icon */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg mb-8 lg:mb-0">
                <i className="fas fa-rocket text-2xl sm:text-3xl text-black"></i>
              </div>

              <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <h3 className="font-bold text-2xl sm:text-3xl text-black">Modernity</h3>
                  <i className="fas fa-quote-right text-2xl text-gray-400 ml-3"></i>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Dikembangkan dengan teknologi modern (React, FastAPI, Scikit-Learn).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Market Analysis Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-lime-500 opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-6">
              Komponen Analisis <span className="text-lime-500">Tren Pasar</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                <strong>NARASTOCK</strong> menghadirkan berbagai komponen visual interaktif yang
                dirancang untuk membantu pengguna memahami tren pergerakan pasar secara real-time.
              </p>
              <p className="text-gray-600 text-lg italic">
                "Lihat Data Lebih Jelas, Baca Tren Lebih Cerdas — Bersama NARASTOCK"
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: 'fa-exchange-alt',
                title: 'Navigasi Pair Mata Uang',
                subtitle: '(Top Tabs)',
              },
              {
                icon: 'fa-calendar-check',
                title: 'Pilih Indikator dan Timeframe',
              },
              {
                icon: 'fa-chart-bar',
                title: 'Grafik Candlestick + Indikator SMA',
              },
              {
                icon: 'fa-chart-area',
                title: 'Grafik Zona & Insight (Bar Chart)',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <i className={`fas ${feature.icon} text-4xl text-gray-700`}></i>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-4">
                  {feature.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {feature.subtitle && (
                    <span className="text-base font-normal">{feature.subtitle}</span>
                  )}
                </h3>
                <button className="mt-8 bg-lime-500 text-black font-bold px-6 py-2 rounded-full hover:bg-lime-600 transition-colors">
                  detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
