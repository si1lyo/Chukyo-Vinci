import React from 'react';
import { Link } from 'react-router-dom';
import { nextActivity } from '../data/nextActivity';

const NextActivity: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ヘッダー */}
      <div className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="text-gray-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* タイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mb-4">
            次回の活動
          </h1>
          <div className="w-24 h-px bg-gray-600 mx-auto"></div>
        </div>

        {/* 活動情報カード */}
        <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 基本情報 */}
            <div>
              <h2 className="text-2xl font-light mb-6 text-gray-200">活動詳細</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">日時</span>
                  <p className="text-xl text-white">{nextActivity.date}</p>
                  <p className="text-lg text-gray-300">{nextActivity.time}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">場所</span>
                  <p className="text-xl text-white">{nextActivity.location}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">内容</span>
                  <p className="text-xl text-white">{nextActivity.content}</p>
                </div>
              </div>
            </div>

            {/* 詳細説明 */}
            <div>
              <h2 className="text-2xl font-light mb-6 text-gray-200">詳細</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {nextActivity.description}
              </p>
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">持ち物</h3>
                <p className="text-gray-300">{nextActivity.requirements}</p>
              </div>
            </div>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="text-center space-y-4">
          <Link to="/trial">
            <button className="px-8 py-4 bg-white text-black font-light tracking-wide hover:bg-gray-200 transition-all duration-300 text-lg rounded-lg">
              体験入部を申し込む
            </button>
          </Link>
          {/* <div>
            <p className="text-gray-400 text-sm mb-2">{nextActivity.contact}</p>
            <Link to="/">
              <button className="px-6 py-3 border border-gray-600 text-gray-300 font-light tracking-wide transition-all duration-300 rounded-lg">
                お問い合わせ
              </button>
            </Link>
          </div> */}
        </div>

        {/* 過去の活動 */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-light mb-6 text-gray-200">過去の活動</h2>
          <p className="text-gray-400 mb-6">
            過去の活動の詳細は、インスタグラムや宣伝チラシでご覧いただけます。
          </p>
          <Link to="/#promotion">
            <button className="px-6 py-3 border border-gray-600 text-gray-300 font-light tracking-wide hover:border-white hover:text-white transition-all duration-300 rounded-lg">
              宣伝チラシを見る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextActivity;
