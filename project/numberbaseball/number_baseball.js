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

computer.choice = function() {
  for (var i = 0; i < 3; i += 1) {
    this.number += String(Math.floor(Math.random() * 9) + 1);
  }
  console.log("컴퓨터가 뽑은 값: " + this.number);
};

game.gamestart = function() {
  for (var i = 0; i < 3; i += 1) {
    if (computer.number[i] === player.number[i]) {
      this.strike += 1;
    } else if (computer.number.includes(player.number[i])) {
      //틀림.
      this.ball += 1;
    } else {
      this.nothing += 1;
    }
  }
};

player.choice = function() {
  this.number = prompt("숫자를 입력하세요. : ");
  console.log("사용자가 입력한 값: " + this.number);
};

game.resultshow = function() {
  console.log(
    this.strike + "스트라이크, " + this.ball + "볼, " + this.nothing + "낫싱"
  );
};

computer.choice();
player.choice();
game.gamestart();
game.resultshow();
