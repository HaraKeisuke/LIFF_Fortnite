window.onload = e => {
  liff.init(data => {
    initializeApp(data);
  });
};

const initializeApp = data => {
  // 公式サイトを開く
  document
    .getElementById('openwindowbutton')
    .addEventListener('click', openURL('https://www.epicgames.com/fortnite'));

  // 落下地点をランダムで決めて落とす
  document.getElementById('decideFallPoint').addEventListener('click', () => {
    // liff.closeWindow();
    var ary = [
      'ジャンク・ジャンクション',
      'ブロック',
      'レイジー・ラグーン',
      'サニー・ステップス',
      'ロンリー・ロッジ',
      'ホーンテッド・ヒルズ',
      'プレザント・パーク',
      'ルート・レイク',
      'スノビー・ショア',
      'ティルテッド・タワー',
      'ダスティ・ディボット',
      'リテイル・ロー',
      'シフティ・シャフト',
      'ソルティ・スプリングス',
      'フェイタル・フィールド',
      'パラダイス・パームズ',
      'ラッキー・ランディング',
      'ハッピー・ハムレット',
      'ポーラー・ピーク',
      'フロスティ・フロイト',
    ];
    liff
      .sendMessages([
        {
          type: 'text',
          text: '今回降りるべき場所は....',
        },
        {
          type: 'text',
          text: '『 ' + ary[Math.floor(Math.random() * ary.length)] + ' 』です！',
        },
      ])
      .then(function() {
        window.alert('Message sent');
      })
      .catch(function(error) {
        window.alert('Error sending message: ' + error);
      });
  });
};

const openURL = url => {
  liff.openWindow({
    url: url,
  });
};
