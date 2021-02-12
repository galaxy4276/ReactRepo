// class ThenableExample {
//   then(resolve, reject) {
//     setTimeout(() => resolve(123), 1000);
//   }
// }
//
// async function asyncFunc() {
//   const result = await new ThenableExample();
//   console.log(result);
// }
//
// asyncFunc().then(r => console.log(r));
function* minsu() {
  const myMsgList = [
    '안녕, 나는 민수야',
    '만나서 반가워',
    '내일 영화 볼래?',
    '시간 안 되니?',
    '내일 모래는 어때?',
  ];

  for (const msg of myMsgList) {
    console.log('수지: ', yield msg);
  }
}

function suji() {
  const myMsgList = ['', '안녕 나는 수지야', '그래 반가워', '...'];
  const gen = minsu();
  for (const msg of myMsgList) {
    console.log('민수: ', gen.next(msg).value);
  }
}

suji();