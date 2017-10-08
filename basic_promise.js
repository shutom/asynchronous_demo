console.log('start');

function puts(str) {
  // ① Promiseコンストラクタを new して、promiseオブジェクトを返す
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(str);
    }, 1000);
  });
}

// ② ①のpromiseオブジェクトに対して .then で値が返ってきた時のコールバックを設定する
puts('async').then((result) => {
  console.log(result)
});

console.log('end');
