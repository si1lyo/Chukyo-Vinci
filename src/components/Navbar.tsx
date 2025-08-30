import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getShortDateTime } from '../data/nextActivity';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="bg-black text-white border-b border-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors cursor-pointer flex-shrink-0"
          >
            <h1 className="text-2xl font-light tracking-wider text-white">
              chukyo:vinci
            </h1>
          </button>

          {/* 次回の活動情報 */}
          <div className="hidden lg:flex items-center flex-shrink-0 mx-4">
            <Link 
              to="/next-activity"
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-all duration-300 rounded-lg border border-gray-600 hover:border-gray-500 whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ minWidth: '16px', minHeight: '16px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-300 font-light leading-none">
                次回活動: {getShortDateTime()}
              </span>
            </Link>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              ホーム
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              ギャラリー
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              活動内容
            </button>
            <button 
              onClick={() => scrollToSection('sns')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              SNS
            </button>
            <button 
              onClick={() => scrollToSection('members')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              メンバー
            </button>
            
            <button 
              onClick={() => scrollToSection('promotion')}
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide bg-transparent border-none cursor-pointer"
            >
              宣伝
            </button>
            <Link 
              to="/trial" 
              className="text-gray-300 hover:text-white transition-colors font-light tracking-wide"
            >
              体験入部
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-900">
            {/* 次回の活動情報（モバイル） */}
            <div className="px-3 py-3 border-b border-gray-800">
              <Link 
                to="/next-activity"
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-all duration-300 rounded-lg border border-gray-600 hover:border-gray-500"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-300 font-light">
                  次回活動: {getShortDateTime()}
                </span>
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {
                  scrollToSection('hero');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                ホーム
              </button>
              <button 
                onClick={() => {
                  scrollToSection('gallery');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                ギャラリー
              </button>
              <button 
                onClick={() => {
                  scrollToSection('activities');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                活動内容
              </button>
              <button 
                onClick={() => {
                  scrollToSection('members');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                メンバー
              </button>
              <button 
                onClick={() => {
                  scrollToSection('sns');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                SNS
              </button>
              <button 
                onClick={() => {
                  scrollToSection('promotion');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors font-light bg-transparent border-none cursor-pointer"
              >
                宣伝
              </button>
              <Link 
                to="/trial" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                体験入部
              </Link>
              
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
