import React, { useEffect } from 'react';

const TrialForm: React.FC = () => {
  useEffect(() => {
    // ページが読み込まれたら即座にMicrosoft Formsにリダイレクト
    window.location.href = 'https://forms.office.com/r/5i7cN2qVyB';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-600 mx-auto"></div>
        <p className="mt-4 text-gray-300">Microsoft Formsにリダイレクト中...</p>
      </div>
    </div>
  );
};

export default TrialForm;
