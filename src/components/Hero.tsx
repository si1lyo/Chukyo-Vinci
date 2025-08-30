import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getShortDateTime } from '../data/nextActivity';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  
  // スライドショー用の画像配列
  const slides = [
    {
      image: '/IMG_0863.jpg',
    },
    {
      image: '/IMG_0830.jpg', // 同じ画像を使用（実際のプロジェクトでは異なる画像を用意）
    },
    {
      image: '/IMG_0880.jpg', // 同じ画像を使用（実際のプロジェクトでは異なる画像を用意）
    },
    {
      image: '/IMG_0889.jpg', // 同じ画像を使用（実際のプロジェクトでは異なる画像を用意）
    },
    // {
    //   image: '/IMG_0001.png', // 同じ画像を使用（実際のプロジェクトでは異なる画像を用意）
    // }
  ];

  // 自動スライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, [slides.length]);

  // 手動でスライドを切り替える
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 前のスライドに移動
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 次のスライドに移動
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // セクションにスクロールする関数
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 別のページにいる場合は、ホームページに遷移してからスクロール
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* スライドショー */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
          {/* 黒フィルター */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
      ))}
      
      {/* ヒーローコンテンツ */}
      <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-4 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight tracking-widest mb-2 sm:mb-3 text-white animate-fade-in leading-tight sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
          Chukyo:Vinci
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 sm:mb-10 text-gray-200 max-w-2xl mx-auto animate-fade-in-delay leading-relaxed">
          トライ式高等学院名駅キャンパス/軽音サークル
        </p>
        
        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-3 px-4">
          <Link to="/trial" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg">
              体験入部
            </button>
          </Link>
          <button 
            onClick={() => scrollToSection('activities')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-light tracking-wide hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 text-base sm:text-lg"
          >
            活動内容
          </button>
        </div>
        
        {/* 次回の活動案内ボタン */}
        <div className="mt-6 animate-fade-in-delay-4">
          <Link to="/next-activity">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 border-b border-gray-600 hover:border-white">
              次回の活動: {getShortDateTime()}
            </button>
          </Link>
        </div>
      </div>

      {/* スライドナビゲーション */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>

      {/* 前後のスライドボタン
      <button
        onClick={goToPreviousSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors duration-300 p-1 sm:p-2"
        aria-label="前のスライド"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors duration-300 p-1 sm:p-2"
        aria-label="次のスライド"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* スライド番号表示 */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 text-white text-xs sm:text-sm font-light">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default Hero;
