window.onload = function(e) {
  liff.init(function(data) {
    initializeApp(data);
  });
};

function initializeApp(data) {
  // 公式サイトを開く
  document.getElementById('openHP').addEventListener('click', function() {
    liff.openWindow({
      url: 'https://www.epicgames.com/fortnite',
    });
  });

  // closeWindow call
  document.getElementById('close').addEventListener('click', function() {
    liff.closeWindow();
  });

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

  // sendMessages call
  document
    .getElementById('decideFallPoint')
    .addEventListener('click', function() {
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
          liff.closeWindow();
        })
        .catch(function(error) {
          liff.closeWindow();
        });
    });

