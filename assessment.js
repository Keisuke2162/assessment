'user strict';

//HTMLファイルとのid属性連携
const userNameInput = document.getElementById('user-name');
const assesmentButton = document.getElementById('assesment');
const resultDiv = document.getElementById('result-message');
const tweetDiv = document.getElementById('tweet');

//assesmentボタンタップ時
//assesmentButton.onclick = function() {
assesmentButton.onclick = () => {
  console.log('Taped assesmentButton')

  //結果表示領域内を掃除
  removeChildElement(resultDiv)

  const userName = userNameInput.value;
  if (userName.length === 0) {
    console.log('入力がありません')
    return
  }

  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDiv.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assesment(userName);
  paragraph.innerText = result;
  resultDiv.appendChild(paragraph);

  console.log(userName)
}

const resultArray = [
  '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
  '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];


/** 
 * Name文字列を渡して診断結果を得る
 * @pram   {string}  userName ユーザー名
 * @return {string}  診断結果
*/
function assesment(userName) {

  //全文字の文字コードを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  //文字コードの合計を回答数で割ったあまりを添字
  const index = sumOfCharCode % resultArray.length;
  let result = resultArray[index]

  //reusltArrayのメッセージ{userName} を引数　userNameに置換
  result = result.replace(/\{userName\}/g, userName);

  return result;
}

/**
 * 引数として渡した要素内の子要素を全て削除
 * @param   {HTMLElement} element HTMLの要素
 * 
 */
 function removeChildElement(element) {
   while (element.firstChild) {
     element.removeChild(element.firstChild);
   }
 }
