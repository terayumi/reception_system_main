class Person {
  constructor(number,room) {
    this.number=number;
    this.room = room;
    this.status = 'reception';
    const date = new Date;
    this.startTime = date;
  }
  /**
 * ルーム変更
 * @param newroom 変更する部屋
 * @param number 変更する人
 */
  static changeRoom(number, newroom) {
    let list = fileOutput();
    list[number].room = newroom;
    fileInput(list);
  }

  /**
 * ステータス変更
 * @param newStatus 変更するステータス
 * @param number 変更する人
 */
  static changeStatus(number, newStatus) {
    let list = fileOutput();
    list[number].status = newStatus;
    fileInput(list)
  }


}

 /**
 * allList取得
 */
  function allList() {
  let list = fileOutput();
  let text = [];
  //リストの0番を表示しないため
  for (let i = 1; i < list.length; i++) {
    text[i - 1] = i + '番,' + list[i].room + ',' + list[i].status;
  }
  return text;

}

/**
 * 人の追加
 * @param {*} room 割り当てられた部屋
 */
let numb=1;
function add(room) {
  a = fileOutput();
  a.push(new Person(numb,room));
  numb=numb+1;
  fileInput(a);
}

/**
 * ファイルインプット
 */
const fs = require('fs');
function fileInput(list) {
  const a = JSON.stringify(list);
  fs.writeFileSync('listFile', a);
}

/**
 * ファイルアウトプット
 */
function fileOutput() {
  const a = fs.readFileSync('listFile')
  const b = JSON.parse(a);
  console.log(b);
  return b;
}


module.exports.changeStatus = Person.changeStatus;
module.exports.changeRoom = Person.changeRoom;
module.exports.allList = allList;
module.exports.add = add;
module.exports.fileOutput = fileOutput;

function fileReset() {
  let a=[];
  a[0] = new Person(0,0);
  let b = JSON.stringify(a);
  fs.writeFileSync('listFile', b);
}
fileReset();
