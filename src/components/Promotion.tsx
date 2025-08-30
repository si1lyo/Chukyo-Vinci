import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Promotion: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // アニメーション用のフック
  const { elementRef: containerRef, isVisible: containerVisible } = useScrollAnimation();
  
  // チラシ画像の配列（実際の画像パスに置き換えてください）
  const flyers = [
    {
      image: '/ad1.png',
      title: '宣伝チラシ',
      description: 'メンバー募集！',
      orientation: 'portrait' // 'portrait' または 'landscape'
    },
    {
      image: '/ad2.png',
      title: '宣伝チラシ',
      description: 'メンバー募集！',
      orientation: 'landscape'
    },
    {
      image: '/ad3.png',
      title: '宣伝チラシ',
      description: 'メンバー募集！',
      orientation: 'portrait'
    },
    // 必要に応じて画像を追加
  ];

  // 自動スライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flyers.length);
    }, 4000); // 4秒ごとに切り替え

    return () => clearInterval(interval);
  }, [flyers.length]);

  // 手動でスライドを切り替える
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 前のスライドに移動
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  // 次のスライドに移動
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flyers.length);
  };

  return (
    <section className="bg-black py-12">
      <div 
        ref={containerRef}
        className={`container mx-auto px-4 transition-all duration-700 ease-out ${
          containerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* セクションヘッダー */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
            宣伝・イベント情報
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto">
            最新のイベント情報やお知らせをご覧ください
          </p>
        </div>

        {/* スライドショー */}
        <div className="relative max-w-3xl mx-auto">
          {/* スライドコンテナ - 固定高さ */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black h-96 md:h-[28rem]">
            {flyers.map((flyer, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  position: index === currentSlide ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <div className="relative w-full h-full">
                  {/* チラシ画像 - 高さ固定で中央配置 */}
                  <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className={`w-full h-full object-contain bg-black`}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%'
                      }}
                      onError={(e) => {
                        // 画像が存在しない場合のフォールバック
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                              <div class="text-center text-white">
                                <div class="text-4xl mb-3">📄</div>
                                <div class="text-lg font-light">${flyer.title}</div>
                                <div class="text-xs opacity-75 mt-2">${flyer.description}</div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  
                  {/* オーバーレイ情報 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
                    <h3 className="text-lg font-light text-white mb-1">
                      {flyer.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light">
                      {flyer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 前後のスライドボタン */}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white transition-all duration-300 p-2 rounded-full backdrop-blur-sm"
            aria-label="前のチラシ"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white transition-all duration-300 p-2 rounded-full backdrop-blur-sm"
            aria-label="次のチラシ"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* スライドナビゲーション */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {flyers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`チラシ ${index + 1} に移動`}
              />
            ))}
          </div>

          {/* スライド番号表示 */}
          <div className="absolute top-3 right-3 z-20 bg-black/70 text-white text-xs font-light px-2 py-1 rounded-full backdrop-blur-sm">
            {currentSlide + 1} / {flyers.length}
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs font-light">
            詳細はインスタグラムで確認してください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
