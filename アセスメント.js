'use strict';
const nameireru = document.getElementById('name');
const botan = document.getElementById('handan');
const kekkawakeru = document.getElementById('kekka');
const tweetwakeru = document.getElementById('tweet');
/*const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
*/
botan.onclick = () => {
    const onamae = nameireru.value;
    if (onamae.length === 0) {
        return;
    }
    console.log(onamae)
    console.log('ボタンが押されました')
    // TODO 診断結果表示エリアの作成
    kekkawakeru.innerText="";
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    kekkawakeru.appendChild(header);

    const para = document.createElement('p');
    const result = assessment(onamae);
    para.innerText = result;
    kekkawakeru.appendChild(para);
    // TODO ツイートエリアの作成
}
/*botan.onclick=function(){
    console.log('ボタンが押されました')
}*/

let answers = [
    '{namae}の今日のご飯はハンバーグです。目玉焼きを乗せちゃいましょう。',
    '{namae}の今日のご飯はオムライスです。やったー！',
    '{namae}の今日のご飯は焼肉です。胃にお肉というお肉をねじ込みましょう。',
    '{namae}の今日のご飯はありません。　酸素でも食べておいてください。',
    '{namae}の今日のご飯はドリアです。やけどには気を付けて。',
    '{namae}の今日のご飯はシチューです。パンはいくつ食べますか？それともご飯派？',
    '{namae}の今日のご飯はカレーです。甘辛中辛激辛、お好みでお食べください！',
    '{namae}の今日のご飯は生姜焼きです。ご飯がぐいぐい進みますね。',
    '{namae}の今日のご飯はロールキャベツです。お肉とキャベツが分離しないよう荷をつけて食べましょう',
    '{namae}の今日のご飯はステーキです。500gくらいいっちゃいますか！',
    '{namae}の今日のご飯は豚の角煮です。丼みたくご飯にのせてもよし、まんまパクついてもよしですよ！',
    '{namae}の今日のご飯は肉じゃがです。日本がビーフシチューを真似てつくったのが始まりだそうですよ',
    '{namae}の今日のご飯は豚汁です。汁は飲む派ですか？',
    '{namae}の今日のご飯はうどんです。おあげにかき揚げ、天ぷら…なにを載せますか？',
    '{namae}の今日のご飯はラーメンです。味噌醤油とんこつ塩、チャーシューマシマシでいきましょう！',
    '{namae}の今日のご飯はパスタです。ちなみにナポリタンは日本生まれらしいです。',
    '{namae}の今日のご飯は麻婆豆腐です。麻婆茄子もいいですね。',
    '{namae}の今日のご飯は鳥大根です。ちっちゃい鶏肉と小さないちょう切り大根の煮物で、とても美味しいですよ。',
    '{namae}の今日のご飯は三色丼です。我が家では鳥そぼろ、鮭フレーク、甘く味付けした卵そぼろです。',
    '{namae}の今日のご飯はお茶漬けです。永谷園のフフフンフン～♪',
    '{namae}の今日のご飯はピザです。照り焼きチキンがおすすめですよ。',
    '{namae}の今日のご飯は唐揚げです。勝手にレモンはかけないでくださいね。死人が出ます。',
    '{namae}の今日のご飯は炒飯と餃子です。明日人に会うときは気を付けて…',
    '{namae}の今日のご飯は親子丼です。でも親子と言っても別々の親と別々の子(無精卵)なんですよね。他人の空似丼…',
    '{namae}の今日のご飯はカツ丼です。今日はドン勝だ！',
    '{namae}の今日のご飯は天丼です。天ぷらは先に食べますか？それともいの一番に食べちゃいます？',
    '{namae}の今日のご飯は寿司です!!!!!サーモン!!!!!いくら!!!!!まぐろ!!!!!たい!!!!!!!',
]
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(namae) {
    //全文字のコード番号を取得してそれを足し合わせる
    let mozizenbu = 0;
    for (let i = 0; i < namae.length; i++) {
        mozizenbu = mozizenbu + namae.charCodeAt(i)
    }
    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = mozizenbu % answers.length;
    let result = answers[index];
    result = result.replaceAll('{namae}', namae);

    return result;
}

/*console.assert(
    assessment('太郎')===
    '太郎の今日のご飯は豚の角煮です',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);*/
