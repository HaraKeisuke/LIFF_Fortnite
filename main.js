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
    ['ジャンク・ジャンクション', 'junkjunction.png'][('ブロック', 'block.png')],
    ['レイジー・ラグーン', 'lazylagoon.png'],
    ['プレッシャー・プラント', 'pressureplant.png'][('サニー・ステップス', 'sunnysteps.png')],
    ['ロンリー・ロッジ', 'lonrylodge.png'],
    ['ホーンテッド・ヒルズ', 'horntedhills.png'],
    ['プレザント・パーク', 'presantpark.png'],
    ['ルート・レイク', 'routerake.png'][('スノビー・ショア', 'snovyshore.png')],
    ['ネオ・ティルテッド', 'neotilted.png'][('ダスティ・ディボット', 'dustydipot.png')],
    ['メガモール', 'megamall.png'],
    ['シフティ・シャフト', 'shiftyshaft.png'],
    ['ソルティ・スプリングス', 'saltysprings.png'],
    ['フェイタル・フィールド', 'fatalfield.png'],
    ['パラダイス・パームズ', 'paradiseparms.png'],
    ['ラッキー・ランディング', 'luckylanding.png'],
    ['ハッピー・ハムレット', 'happyhamlet.png'],
    ['ポーラー・ピーク', 'polerpiek.png'],
    ['フロスティ・フロイト', 'flostyfloit.png'],
  ];

  // sendMessages call
  document
    .getElementById('decideFallPoint')
    .addEventListener('click', function() {
      var island = ary[Math.floor(Math.random() * ary.length)];
      liff
        .sendMessages([
          {
            type: 'text',
            text: '今回降りるべき場所は....',
          },
          {
            type: 'text',
            text: '『 ' + island[0] + ' 』です！',
          },
          {
            type: 'image',
            originalContentUrl:
              'https://fortnite-tool.herokuapp.com/islands/original/' + island[1],
            previewImageUrl:
              'https://fortnite-tool.herokuapp.com/islands/small/' + island[1],
          },
          {
            type: 'text',
            text: '続けて利用する場合は以下のリンクをクリック！\n line://app/1587298327-JKXxMDMy',
          },
        ])
        .then(function() {
          liff.closeWindow();
        })
        .catch(function(error) {
          liff.closeWindow();
        });
    });
}
