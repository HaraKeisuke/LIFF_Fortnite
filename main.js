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
          window.alert('Message sent');
        })
        .catch(function(error) {
          window.alert('Error sending message: ' + error);
        });
    });

  // get access token
  // document
  //   .getElementById('getaccesstoken')
  //   .addEventListener('click', function() {
  //     const accessToken = liff.getAccessToken();
  //     document.getElementById('accesstokenfield').textContent = accessToken;
  //     toggleAccessToken();
  //   });

  // // get profile call
  // document
  //   .getElementById('getprofilebutton')
  //   .addEventListener('click', function() {
  //     liff
  //       .getProfile()
  //       .then(function(profile) {
  //         document.getElementById('useridprofilefield').textContent =
  //           profile.userId;
  //         document.getElementById('displaynamefield').textContent =
  //           profile.displayName;

  //         const profilePictureDiv = document.getElementById(
  //           'profilepicturediv'
  //         );
  //         if (profilePictureDiv.firstElementChild) {
  //           profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
  //         }
  //         const img = document.createElement('img');
  //         img.src = profile.pictureUrl;
  //         img.alt = 'Profile Picture';
  //         profilePictureDiv.appendChild(img);

  //         document.getElementById('statusmessagefield').textContent =
  //           profile.statusMessage;
  //         toggleProfileData();
  //       })
  //       .catch(function(error) {
  //         window.alert('Error getting profile: ' + error);
  //       });
  // });
}

// function toggleAccessToken() {
//   toggleElement('accesstokendata');
// }

// function toggleProfileData() {
//   toggleElement('profileinfo');
// }

// function toggleElement(elementId) {
//   const elem = document.getElementById(elementId);
//   if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
//     elem.style.display = 'none';
//   } else {
//     elem.style.display = 'block';
//   }
// }

// window.onload = function(e) {
//   liff.init(function(data) {
//     initializeApp(data);
//   });
// };

// function initializeApp(data) {
//   // 公式サイトを開く
//   document
//     .getElementById('openwindowbutton')
//     .addEventListener('click', function() {
//       liff.openWindow({
//         url: 'https://www.epicgames.com/fortnite',
//       });
//     });

//   document
//     .getElementById('close')
//     .addEventListener('click', liff.closeWindow());

//   // 落下地点をランダムで決めて落とす
//   document
//     .getElementById('decideFallPoint')
//     .addEventListener('click', function() {
//       // liff.closeWindow();
//       var ary = [
//         'ジャンク・ジャンクション',
//         'ブロック',
//         'レイジー・ラグーン',
//         'サニー・ステップス',
//         'ロンリー・ロッジ',
//         'ホーンテッド・ヒルズ',
//         'プレザント・パーク',
//         'ルート・レイク',
//         'スノビー・ショア',
//         'ティルテッド・タワー',
//         'ダスティ・ディボット',
//         'リテイル・ロー',
//         'シフティ・シャフト',
//         'ソルティ・スプリングス',
//         'フェイタル・フィールド',
//         'パラダイス・パームズ',
//         'ラッキー・ランディング',
//         'ハッピー・ハムレット',
//         'ポーラー・ピーク',
//         'フロスティ・フロイト',
//       ];
//       liff
//         .sendMessages([
//           {
//             type: 'text',
//             text: '今回降りるべき場所は....',
//           },
//           {
//             type: 'text',
//             text: '『 ' + ary[Math.floor(Math.random() * ary.length)] + ' 』です！',
//           },
//         ])
//         .then(function() {
//           window.alert('Message sent');
//         })
//         .catch(function(error) {
//           window.alert('Error sending message: ' + error);
//         });
//     });
// }

// function openURL(url) {
//   liff.openWindow({
//     url: url,
//   });
// }
