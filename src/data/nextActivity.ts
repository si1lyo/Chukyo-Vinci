export const nextActivity = {
  date: '未定',
  time: '13:00〜16:00',
  location: 'トライ式高等学院名駅キャンパス',
  content: 'スタジオ練習・楽器体験',
  description: '次回の活動では、楽器体験会を開催します。経験者も初心者も大歓迎です！',
  requirements: '（初回ではない方は）スタジオ代、今池駅までの交通費をお持ちください。',
  contact: 'ご質問やご相談がございましたら、お気軽にお問い合わせください。'
};

// 短縮版の日時表示用
export const getShortDateTime = () => {
  // "2026年2月20日（金）" から "2/20(金)" を抽出
  const dateMatch = nextActivity.date.match(/(\d+)年(\d+)月(\d+)日（(.+?)）/);
  if (dateMatch) {
    const [, year, month, day, weekday] = dateMatch;
    return `${month}/${day}(${weekday}) ${nextActivity.time.split('〜')[0]}〜`;
  }
  return `${nextActivity.date} ${nextActivity.time}`;
};
