var tblData = [
    // 一つ目の時刻表
    [
    '# 赤56     (赤羽行き)      ',
    '06: 01Ｎ 13Ｎ 24Ｎ 32Ｎ 39Ｎ 46Ｎ 54',
    '07: 00Ｎ 05 10Ｎ 16Ｎ 23Ｎ 30 39Ｎ 48Ｎ 57',
    '08: 06Ｎ 14Ｎ 23 32 41Ｎ 50 59Ｎ',
    '09: 10 21 32Ｎ 43Ｎ 54Ｎ ',
    '10: 05 15 25Ｎ 35Ｎ 45 55Ｎ',
    '11: 06Ｎ 16Ｎ 26 36 46Ｎ 56Ｎ',
    '12: 06 16Ｎ 26Ｎ 36Ｎ 46Ｎ 56',
    '13: 06 16Ｎ 26 36 46Ｎ 56',
    '14: 06Ｎ 16 26 36Ｎ 46 56',
    '15: 05 15 25 35Ｎ 45Ｎ 55Ｎ',
    '16: 05 15Ｎ 27 37 47 57',
    '17: 07Ｎ 17 27 37 47Ｎ 58',
    '18: 10 21 31Ｎ 45',
    '19: 00Ｎ 15Ｎ 30Ｎ 48',
    '20: 05 25 47Ｎ ',
    '21: 08Ｎ 30 50',
    '22: 22 52'
    ],
    // 二つ目の時刻表
    [
    '# 増17     (成増行き)      ',
    '07: 08 18 26 28 33 41 46 51',
    '08: 01 06 11 21 31 36 39 41 49 51 56 59',
    '09: 01 01 09 10 11 19 21 29 31 39 41 59',
    '10: 01 19 21 39 41 59',
    '11: 01 19 21 39 41 59',
    '12: 01 19 21 39 41 59',
    '13: 01 19 21 39 41 59',
    '14: 01 19 21 39 41 59',
    '15: 01 19 21 38 39 56 58 59',
    '16: 18 19 38 39 58',
    '17: 02 10 12 18 22 23 28 32 33 39 42 44 49 51 52 54 59',
    '18: 02 09 12 19 22 29 32 39 42 49 52 59',
    '19: 02 09 12 19 22 29 32 39 42 49 49 59 59',
    '20: 18 19 38 39 58 59',
    '21: 28 29 58 59',
    '22: 28 29 58 59'
    ],
    // 三つ目の時刻表
    [
    '# 高01     (成増行き)      ',
    '06: 40',
    '07: 02 12 22 27 32 37 42 52 57',
    '08: 02 07 12 22 32 42 52',
    '09: 02 12 22 32 52',
    '10: 12 32 52',
    '11: 12 32 52',
    '12: 12 32 52',
    '13: 12 32 52',
    '14: 12 32 52',
    '15: 12 32 52',
    '16: 12 32 55',
    '17: 05 15 25 35 45 55',
    '18: 05 15 25 35 45 55',
    '19: 05 15 25 35 45 52',
    '20: 12 32 52',
    '21: 22 52',
    '22: 22 52'
    ],
    // 四つ目の時刻表
    [
    '# 東練01 (東武練馬行き)',
    '10: 03 05 23 25 43 45 52',
    '11: 03 05 23 25 43 45 52',
    '12: 03 05 23 25 43 45 52',
    '13: 03 05 23 25 43 45 52',
    '14: 03 05 23 25 43 45 52',
    '15: 03 05 23 25 43 45 52',
    '16: 00 02 03 12 22 23 42 43',
    '17: 02 06 12 14 16 22 26 27 32 36 37 43 46 48 53 55 56 58',
    '18: 03 06 13 16 23 26 33 36 43 46 53 56',
    '19: 03 06 13 16 23 26 33 36 43 46 53 53',
    '20: 03 03 22 23 42 43',
    '21: 02 03 32 33',
    '22: 02 03 32 33',
    '23: 02 03'
    ]
];

var busTables = [];
var busTables2 = [];
var busTables3 = [];
var busTables4 = [];
var tableNo = 0;

// 関数の定義...

var busTables = [];
var busTables2 = [];
var busTables3 = [];
var busTables4 = [];

function  hms(tim) {
    if (tim == '')  return ' ';
    return ('00' + Math.floor(tim / (60 * 60))).slice(-2) + ':' + ('00' + Math.floor((tim % (60 * 60)) / 60)).slice(-2) + ':' + ('00' + (tim % 60)).slice(-2);
};

function  hm(tim) {
    if (tim == '') return ' ';
    return  ('00' + Math.floor(tim / (60 * 60))).slice(-2) + ':' + ('00' + Math.floor((tim % (60 * 60)) / 60)).slice(-2);
};

function hm2Time(hm) {
    return (Math.floor((hm / 100)) * (60 * 60) + (hm % 100) * 60);
}

function tableSet() {
  for (i = 0; i < tblData.length; i++){
    var bTable = tblData[i];
    for (j = 0; j < bTable.length; j++){
      if (bTable[j].charAt(0) == "#") {
        var tbleEl = [bTable[j].substring(2)]; // バス停名を先頭要素にセット
      } else {
        var lineData = bTable[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {   // ：の前が数値だったら
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++){
            var mm = (minData[k]).replace(/\D/g,"");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables.push(tbleEl);
  }
}

function tableSet2() {
  for (i = 1; i < tblData.length; i++){
    var bTable2 = tblData[i];
    for (j = 0; j < bTable2.length; j++){
      if (bTable2[j].charAt(0) == "#") {
        var tbleEl = [bTable2[j].substring(2)]; // バス停名を先頭要素にセット
      } else {
        var lineData = bTable2[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {   // ：の前が数値だったら
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++){
            var mm = (minData[k]).replace(/\D/g,"");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables2.push(tbleEl);
  }
}

function tableSet3() {
  for (i = 2; i < tblData.length; i++){
    var bTable3 = tblData[i];
    for (j = 0; j < bTable3.length; j++){
      if (bTable3[j].charAt(0) == "#") {
        var tbleEl = [bTable3[j].substring(2)]; // バス停名を先頭要素にセット
      } else {
        var lineData = bTable3[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {   // ：の前が数値だったら
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++){
            var mm = (minData[k]).replace(/\D/g,"");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables3.push(tbleEl);
  }
}

function tableSet4() {
  for (i = 3; i < tblData.length; i++){
    var bTable4 = tblData[i];
    for (j = 0; j < bTable4.length; j++){
      if (bTable4[j].charAt(0) == "#") {
        var tbleEl = [bTable4[j].substring(2)]; // バス停名を先頭要素にセット
      } else {
        var lineData = bTable4[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {   // ：の前が数値だったら
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++){
            var mm = (minData[k]).replace(/\D/g,"");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables4.push(tbleEl);
  }
}


function clock() {
    // document.getElementById("bus_stop").innerHTML = busTables[tableNo][0];
    var now = new Date();
    var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
//  var tbl = busTables[tableNo];
    var bTime, nbTime, nnbTime;
    bTime = nbTime = nnbTime = '';
    for (var i = 1; i < busTables[tableNo].length; i++) {
        var bt = busTables[tableNo][i];
        if (bt > (now.getHours() * 100 + now.getMinutes())) {
            bTime = hm2Time(bt);
            if ((i + 1) < busTables[tableNo].length) {
                nbTime = hm2Time(busTables[tableNo][i + 1]);
                if ((i + 2) < busTables[tableNo].length) {
                    nnbTime = hm2Time(busTables[tableNo][i + 2]);
                };
            };
            break;
        }
    };
    document.getElementById("clock_time").innerHTML = hms(nowTime);
    document.getElementById("bus").innerHTML = hm(bTime);
    document.getElementById("timeLeft").innerHTML = hms(bTime -nowTime);
    document.getElementById("nbus").innerHTML = hm(nbTime);
    document.getElementById("nnbus").innerHTML = hm(nnbTime);
};

function clock2() {
    // document.getElementById("bus_stop").innerHTML = busTables2[tableNo][0];
    var now = new Date();
    var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
//  var tbl = busTables2[tableNo];
    var bTime, nbTime, nnbTime;
    bTime = nbTime = nnbTime = '';
    for (var i = 1; i < busTables2[tableNo].length; i++) {
        var bt = busTables2[tableNo][i];
        if (bt > (now.getHours() * 100 + now.getMinutes())) {
            bTime = hm2Time(bt);
            if ((i + 1) < busTables2[tableNo].length) {
                nbTime = hm2Time(busTables2[tableNo][i + 1]);
                if ((i + 2) < busTables2[tableNo].length) {
                    nnbTime = hm2Time(busTables2[tableNo][i + 2]);
                };
            };
            break;
        }
    };
    document.getElementById("bus2").innerHTML = hm(bTime);
    document.getElementById("timeLeft2").innerHTML = hms(bTime -nowTime);
    document.getElementById("nbus2").innerHTML = hm(nbTime);
    document.getElementById("nnbus2").innerHTML = hm(nnbTime);
};

function clock3() {
    // document.getElementById("bus_stop").innerHTML = busTables2[tableNo][0];
    var now = new Date();
    var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
//  var tbl = busTables2[tableNo];
    var bTime, nbTime, nnbTime;
    bTime = nbTime = nnbTime = '';
    for (var i = 1; i < busTables3[tableNo].length; i++) {
        var bt = busTables3[tableNo][i];
        if (bt > (now.getHours() * 100 + now.getMinutes())) {
            bTime = hm2Time(bt);
            if ((i + 1) < busTables3[tableNo].length) {
                nbTime = hm2Time(busTables3[tableNo][i + 1]);
                if ((i + 2) < busTables3[tableNo].length) {
                    nnbTime = hm2Time(busTables3[tableNo][i + 2]);
                };
            };
            break;
        }
    };
    document.getElementById("bus3").innerHTML = hm(bTime);
    document.getElementById("timeLeft3").innerHTML = hms(bTime -nowTime);
    document.getElementById("nbus3").innerHTML = hm(nbTime);
    document.getElementById("nnbus3").innerHTML = hm(nnbTime);
};

function clock4() {
    // document.getElementById("bus_stop").innerHTML = busTables2[tableNo][0];
    var now = new Date();
    var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
//  var tbl = busTables2[tableNo];
    var bTime, nbTime, nnbTime;
    bTime = nbTime = nnbTime = '';
    for (var i = 1; i < busTables4[tableNo].length; i++) {
        var bt = busTables4[tableNo][i];
        if (bt > (now.getHours() * 100 + now.getMinutes())) {
            bTime = hm2Time(bt);
            if ((i + 1) < busTables4[tableNo].length) {
                nbTime = hm2Time(busTables4[tableNo][i + 1]);
                if ((i + 2) < busTables4[tableNo].length) {
                    nnbTime = hm2Time(busTables4[tableNo][i + 2]);
                };
            };
            break;
        }
    };
    document.getElementById("bus4").innerHTML = hm(bTime);
    document.getElementById("timeLeft4").innerHTML = hms(bTime -nowTime);
    document.getElementById("nbus4").innerHTML = hm(nbTime);
    document.getElementById("nnbus4").innerHTML = hm(nnbTime);
};

function startClock() {
    tableSet();
    tableSet2();
    tableSet3();
    tableSet4();
    // // 時刻表を切り替えるボタンをHTMLに追加する
    // var div_button = document.createElement("div");
    // var btn_element = "";
    // for (i = 0; i < busTables.length; i++) {
    //     btn_element = btn_element + ' <input type="button" value="' + busTables[i][0] + '" onclick="';
    //     btn_element = btn_element + 'tableNo = ' + i + ';"/>';
    //     div_button.innerHTML = btn_element;
    // };
    // document.getElementById("btn").appendChild(div_button);

    // 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
    setInterval(clock, 1000);
    setInterval(clock2, 1000);
    setInterval(clock3, 1000);
    setInterval(clock4, 1000);
}