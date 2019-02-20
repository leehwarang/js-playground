var computer = {
  number: ""
};
var player = {
  number: ""
};

var game = {
  strike: 0,
  ball: 0,
  nothing: 0
};

var choice = function() {
  for (var i = 0; i < 3; i += 1) {
    computer.number += String(Math.floor(Math.random() * 9) + 1);
  }
  console.log("컴퓨터가 뽑은 값: " + computer.number);
};

var gamestart = function() {
  for (var i = 0; i < 3; i += 1) {
    if (computer.number[i] === player.number[i]) {
      game.strike += 1;
    } else if (computer.number.includes(player.number[i])) {
      game.ball += 1;
    } else {
      game.nothing += 1;
    }
  }
  // for (var i in player.number) {
  //   if (
  //     computer.number.includes(player.number[i]) &&
  //     i == computer.number.indexOf(player.number[i])
  //   ) {
  //     game.strike += 1;
  //     computer.number = computer.number.replace(player.number[i], "0");
  //   } else if (computer.number.includes(player.number[i])) {
  //     game.ball += 1;
  //   } else {
  //     game.nothing += 1;
  //   }
  // }
};

var resultshow = function() {
  console.log(
    game.strike + "스트라이크, " + game.ball + "볼, " + game.nothing + "낫싱"
  );
};

choice();
player.number = prompt("숫자를 입력하세요. : ");
console.log("사용자가 입력한 값: " + player.number);
gamestart();
resultshow();
