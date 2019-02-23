var board = document.querySelector("#board");
board.innerHTML = "0";

var btns = document.querySelector(".btn-list");
btns.addEventListener("click", function(e) {
  if (e.target.className === "btn-num") {
    calculator.btn_list.push(e.target.innerHTML);
    calculator.displayboard();
  } else if (e.target.className === "btn-op") {
    if (e.target.innerHTML === "=") {
      calculator.prepare();
    } else {
      calculator.btn_list.push(" " + e.target.innerHTML + " ");
      calculator.displayboard();
    }
  } else if (e.target.className === "btn-bs") {
    calculator.btn_list.pop();
    calculator.displayboard();
  }
});

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
      result = Math.floor(Number(first_num) / Number(second_num));
      break;
  }
  return result;
};

calculator.prepare = function() {
  this.btn_list = this.str.split(" ");
  var result = this.btn_list.shift();
  while (this.btn_list.length != 0) {
    var op = this.btn_list.shift();
    var second_num = this.btn_list.shift();
    result = this.start(result, op, second_num);
  }
  board.innerHTML = result;
  this.btn_list.push(String(result));
};
