import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-light tracking-wider text-white">
              chukyo:vinci
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              トライ式高等学院名駅キャンパス 軽音サークル
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-medium mb-2">活動内容</h4>
              <p className="text-gray-400 text-sm">バンド活動・スタジオ練習</p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-medium mb-2">連絡先</h4>
              <p className="text-gray-400 text-sm">インスタのDMまで</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 chukyo:vinci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
