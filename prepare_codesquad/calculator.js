var board = document.querySelector("#board");
var btns = document.querySelectorAll(".btn-num");
var operators = document.querySelectorAll(".btn-op");
var bs = document.querySelector(".btn-bs");
board.innerHTML = "0";

var calculator = {
  str: "",
  btn_list: []
};

calculator.displayboard = function() {
  this.str = this.btn_list.join("");
  board.innerHTML = this.str;
};

calculator.start = function(first_num, op, second_num) {
  switch (op) {
    case "+":
      result = Number(first_num) + Number(second_num);
      break;
    case "-":
      result = Number(first_num) - Number(second_num);
      break;
    case "*":
      result = Number(first_num) * Number(second_num);
      break;
    case "/":
      result = first_num / second_num;
      break;
  }
  return result;
};

calculator.prepare = function() {
  console.log("계산 준비!");
  this.btn_list = this.str.split(" ");
  console.log(this.btn_list);
  var result = this.btn_list.shift();
  console.log(result);
  while (this.btn_list.length != 0) {
    var op = this.btn_list.shift();
    console.log(op);
    var second_num = this.btn_list.shift();
    console.log(second_num);
    result = this.start(result, op, second_num);
    console.log(result);
  }
  board.innerHTML = result;
  this.btn_list.push(String(result));
};

for (var btn of btns) {
  btn.addEventListener("click", function(e) {
    calculator.btn_list.push(e.target.innerHTML);
    calculator.displayboard();
  });
}

for (var op of operators) {
  op.addEventListener("click", function(e) {
    if (e.target.innerHTML === "=") {
      calculator.prepare();
    } else {
      calculator.btn_list.push(" " + e.target.innerHTML + " ");
      calculator.displayboard();
    }
  });
}

bs.addEventListener("click", function(e) {
  calculator.btn_list.pop();
  calculator.displayboard();
});
