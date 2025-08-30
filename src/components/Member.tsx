import React from 'react';
import { UserGroupIcon, MusicalNoteIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Members: React.FC = () => {
  // アニメーション用のフック
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: joinRef, isVisible: joinVisible } = useScrollAnimation({ delay: 100 });

  return (
    <section id="members" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6">
            メンバー
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            マネージャーも募集中です！
          </p>
        </div>

        {/* Member Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 ease-out ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center p-6 bg-black border border-gray-800 rounded-lg">
            <UserGroupIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-3xl font-light text-white mb-2">5+</div>
            <p className="text-gray-300 font-light">メンバー数</p>
          </div>
          
          <div className="text-center p-6 bg-black border border-gray-800 rounded-lg">
            <MusicalNoteIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-3xl font-light text-white mb-2">3</div>
            <p className="text-gray-300 font-light">担当パート種類</p>
          </div>
          
          <div className="text-center p-6 bg-black border border-gray-800 rounded-lg">
            <HeartIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-3xl font-light text-white mb-2">3+</div>
            <p className="text-gray-300 font-light">未経験から始めた人</p>
          </div>
          
          <div className="text-center p-6 bg-black border border-gray-800 rounded-lg">
            <MusicalNoteIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-3xl font-light text-white mb-2">1</div>
            <p className="text-gray-300 font-light">バンド数</p>
          </div>
        </div>

        {/* Join Us Section */}
        <div 
          ref={joinRef}
          className={`text-center bg-black border border-gray-800 rounded-lg p-12 transition-all duration-700 ease-out ${
            joinVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-light text-white mb-4">一緒に音楽を楽しもう！</h3>
          <p className="text-xl mb-8 text-gray-300 font-light max-w-2xl mx-auto">
            楽器経験の有無に関係なく大歓迎。ぜひ来てくださいね！
          </p>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-2"></div>
              <h4 className="font-semibold mb-2 text-gray-900">初心者大歓迎</h4>
              <p className="text-sm text-gray-600">楽器経験がなくても安心</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-2"></div>
              <h4 className="font-semibold mb-2 text-gray-900">楽器レンタル</h4>
              <p className="text-sm text-gray-600">楽器を持っていなくてもOK</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-2"></div>
              <h4 className="font-semibold mb-2 text-gray-900">成長サポート</h4>
              <p className="text-sm text-gray-600">丁寧にサポートします</p>
            </div>
          </div> */}
          
          <a
            href="/trial"
            className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded-full font-light tracking-wide text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            体験入部に参加する
          </a>
        </div>
      </div>
    </section>
  );
};

export default Members;
