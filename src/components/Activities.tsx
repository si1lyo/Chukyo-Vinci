import React, { useState } from 'react';
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  AcademicCapIcon, 
  VideoCameraIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../utils/useScrollAnimation';

// パスワードをハッシュ化する関数
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

const Activities: React.FC = () => {

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // アニメーション用のフック
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: videoRef, isVisible: videoVisible } = useScrollAnimation({ delay: 100 });
  const { elementRef: scheduleRef, isVisible: scheduleVisible } = useScrollAnimation({ delay: 200 });

  const ENCRYPTED_URL = '';
  
  const getVideoLink = (): string => {
    try {
      const decoded = atob(ENCRYPTED_URL);
      console.log('URL復号化成功:', {
        encrypted: ENCRYPTED_URL,
        decoded: decoded
      });
      return decoded;
    } catch (error) {
      console.error('URL復号化エラー:', error);
      return '';
    }
  };

  const CORRECT_PASSWORD_HASH = 'b98d639814cd8cbec8ed0febeee7ebb280c6375c1717d310ace4310aa48acbff';

  const handlePasswordSubmit = async () => {
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    setIsLoading(true);
    try {
      const hashedPassword = await hashPassword(password);
      
      console.log('パスワード認証:', {
        input: password,
        hashed: hashedPassword,
        expected: CORRECT_PASSWORD_HASH,
        match: hashedPassword === CORRECT_PASSWORD_HASH
      });
      
      if (hashedPassword === CORRECT_PASSWORD_HASH) {
        console.log('パスワード認証成功');
        setPasswordError(false);
        setShowPasswordModal(false);
        const decryptedUrl = getVideoLink();
        console.log('復号化されたURL:', decryptedUrl);
        if (decryptedUrl) {
          console.log('YouTubeを開きます:', decryptedUrl);
          window.open(decryptedUrl, '_blank');
        } else {
          console.error('URL復号化に失敗しました');
        }
      } else {
        console.log('パスワード認証失敗');
        setPasswordError(true);
      }
    } catch (error) {
      console.error('パスワードハッシュ化エラー:', error);
      setPasswordError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openPasswordModal = () => {
    setShowPasswordModal(true);
    setPassword('');
    setPasswordError(false);
  };

  return (
    <section id="activities" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extralight tracking-widest text-white mb-6">
            活動内容
          </h2>
          <p className="text-xl font-light tracking-wide text-gray-300 max-w-3xl mx-auto">
            みんなで楽しくやっています。それぞれが好きな曲をやる時もあれば、みんなで合わせることもあります。
          </p>
        </div>

        {/* Activities Grid */}
        <div 
          ref={activitiesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 ease-out ${
            activitiesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Band Practice */}
          <div className="bg-black border border-gray-800 p-8 rounded-lg">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <MusicalNoteIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light mb-4 text-white">バンド練習・セッション</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              練習や、セッションを行っています。
              楽器の経験に関係なく、音楽を楽しめます。
            </p>
          </div>

          {/* Karaoke Events */}
          <div className="bg-black border border-gray-800 p-8 rounded-lg">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <MicrophoneIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light mb-4 text-white">カラオケ・音楽イベント</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              たまにカラオケ大会や音楽鑑賞会を開催してます。
              是非気軽に参加してください！
            </p>
          </div>

          {/* Instrument Lessons */}
          <div className="bg-black border border-gray-800 p-8 rounded-lg">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <AcademicCapIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light mb-4 text-white">教え合い</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              経験者がいれば教えてもらえます。仲良くなれるかも！？
            </p>
          </div>

          {/* Live Performances */}
          <div className="bg-black border border-gray-800 p-8 rounded-lg">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <VideoCameraIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-light mb-4 text-white">ライブ・文化祭</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              文化祭で動画発表をしました。盛り上がって良かったです！
            </p>
          </div>
        </div>

        {/* Cultural Festival Video */}
        <div 
          ref={videoRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            videoVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-light tracking-wide text-white mb-4">文化祭ライブ</h3>
            <p className="text-lg font-light tracking-wide text-gray-300">
              2024年の文化祭で披露した演奏の様子
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black border border-gray-800 p-8 rounded-lg shadow-2xl text-center">
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-4 text-white">文化祭ライブ動画</h4>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                パスワードを入力して動画をご覧ください
              </p>
              <button
                onClick={openPasswordModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-light py-3 px-8 rounded-xl transition-all duration-300"
              >
                動画を見る
              </button>
            </div>
          </div>
        </div>

        {/* Activity Schedule */}
        <div 
          ref={scheduleRef}
          className={`mt-16 transition-all duration-700 ease-out ${
            scheduleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-light tracking-wide text-white mb-4">活動スケジュール</h3>
            <p className="text-lg font-light tracking-wide text-gray-300">
              活動の予定
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <CalendarIcon className="w-6 h-6 text-blue-500 mr-3" />
                <h4 className="text-lg font-light text-white">不定期</h4>
              </div>
              <p className="text-gray-300 font-light leading-relaxed">バンド練習・セッション</p>
              <p className="text-sm text-gray-400 mt-2 font-light">13:00 - 15:30</p>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <CalendarIcon className="w-6 h-6 text-blue-500 mr-3" />
                <h4 className="text-lg font-light text-white">不定期</h4>
              </div>
              <p className="text-gray-300 font-light leading-relaxed">カラオケ・音楽イベント</p>
              <p className="text-sm text-gray-400 mt-2 font-light">イベントによって異なります</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
              <MapPinIcon className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-gray-300 font-light">活動場所：Reflect Studio etc...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
            <h3 className="text-2xl font-light tracking-wide text-white mb-6 text-center">パスワード入力</h3>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力"
                className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400 font-light"
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handlePasswordSubmit()}
                disabled={isLoading}
              />
              {passwordError && (
                <p className="text-red-400 text-sm mt-2 font-light">パスワードが正しくありません</p>
              )}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 font-light"
                disabled={isLoading}
              >
                キャンセル
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-light"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    処理中...
                  </div>
                ) : (
                  '送信'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
