function getURL(url) {
  // ①Promiseコンストラクタを new して、promiseオブジェクトを返す
  return new Promise((resolve, reject) => {
    const https = require('https');

    https.get(url, function(res) {
      if (!res.statusCode === 200) {
        res.on('data', function(chunk) {
          // ②うまくいった場合の処理を記載する
          resolve('success');
        });
      } else {
        // ②うまくいかなかった場合の処理を記載する
        reject(new Error(res.statusCode));
      }
    }).on('error', function(e) {
      reject(new Error(e.message));
    });
  })
}

const URL = "https://www.google.co.jp";
// ③promiseオブジェクトに対して .then で値が返ってきた時のコールバックを設定する
getURL(URL).then((value) => {
  console.log(value);
}).catch(function onRejected(error){
  console.error(error);
});