var display = document.getElementById("display-board");
var input = {};
input.btn_list = [];
input.btn_str = "";

input.init = function() {
  input.btn_list = [];
};

input.displayUpdate = function() {
  this.btn_str = this.btn_list.join("");
  display.innerHTML = this.btn_str;
};

input.startCal = function(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
  return result;
};

input.calculate = function() {
  this.btn_list = this.btn_str.split(" ");

  var first_num = this.btn_list.shift();
  var second_num;
  var op;
  var result = first_num;
  while (this.btn_list.length != 0) {
    op = this.btn_list.shift();
    second_num = this.btn_list.shift();
    result = this.startCal(result, op, second_num);
  }
  display.innerHTML = result;
  this.btn_list.push(result);
};

input.add_btn = function(e) {
  if (e.target.className == "btns-num") {
    this.btn_list.push(e.target.innerHTML);
    this.displayUpdate();
  } else if (e.target.className == "btns-operator") {
    this.btn_list.push(" " + e.target.innerHTML + " ");
    this.displayUpdate();
  } else if (e.target.className == "btns-bs") {
    this.btn_list.pop();
    this.displayUpdate();
  } else {
    this.calculate();
  }
};

document.addEventListener("DOMContentLoaded", input.init());

//이벤트 위임 방식으로 구현
var btns_group = document
  .getElementById("btns-group")
  .addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
      input.add_btn(e);
    }
  });
