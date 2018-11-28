// JS calculator
// by michelle
// 2018.11.28

// input object: 입력을 담당하는 객체
var input = { 'array': [] };

//입력받은 수식을 문자열로 리턴
input.getInput = function () {
    return this.array.join(""); //배열의 원소를 연결하여 하나의 값으로 만듦.(dafault값은 ,)
}

//입력 배열을 초기화
input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
}

//수식이 비었는지 검사
input.isEmpty = function () {
    return this.array.length === 0;
}

//수식에서 값을 읽어옴 
input.getNumber = function () {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

//수식에서 연산자를 읽어옴
input.getOperator = function () {
    var op = this.array.shift();

    if (op === '+' || op === '-' || op === '*' || op === '/') {
        return op;
    } else {
        return "$";
    }
};

//계산을 실행하기 전 준비 단계
//getValue()를 호출하기 전에 반드시 수행되어야 함.
input.prepareCalculate = function(){
    this.array = this.array.join("").split(" ")
}

// output object: 출력을 담당하는 객체
var output = {};

output.text = document.getElementById('output'); //div 태그 자체가 output.text임.
//이 문장을 써주지 않으면 output.text가 div태그를 의미하지 않음.


output.print = function(str){
    this.text.innerHTML = str;
}

output.display = function(){
    this.text.innerHTML = input.getInput();
}

// calculator object: 계산을 담당하는 객체      
var calculator = {};
calculator.calculate = function (first, second, op) {
    var ret = first; //메서드 안에서 사용되는 변수(객체의 멤버 변수 x)
    switch (op) {
        case '+':
            ret += second;
            break;

        case '-':
            ret -= second;
            break;

        case '*':
            ret *= second;
            break;

        case '/':
            ret /= second;
            break;

        default:
            return NaN;
    }
    return ret;
};


var clickNumbers = function (event) { //객체를 눌렀을 때 객체 자체가 event로 넘어옴
    var str = event.target.innerHTML;
    console.log(str);

    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = 'Empty'; //비어 있으면 참, 비어있지 않으면 거짓 
    } else {
        output.display();
        //output.text.innerHTML = input.getInput(); //output.text의 innerHTML을 설정하는 것, 
    }
};

var showResult = function (event) {
   input.prepareCalculate();
    var result = input.getNumber();
    console.log("debug:",result);
    while (!input.isEmpty()) { //비어있지 않을 때 실행, 비어있으면 실행X
        var op = input.getOperator();
        console.log("debug:",op);
        var second = input.getNumber();
        console.log("debug:",second);
        result = calculator.calculate(result, second, op);
        console.log("debug:",result);
    }
    output.print(result);
    input.removeAll(result);


}


// var input = {};

//         input.init = function(str){
//             this.list = str.split(" ");
//             console.log(this.list);
//         };

//         input.empty = function(){
//             return this.list.length == 0; //비어 있으면 참, 비어있지 않으면 거짓 
//         };

//         input.getValue = function(){
//             var str =  Number(this.list.shift());
//             return str;
//         };

//         input.getOperator = function(){
//             var op =  this.list.shift();

//             if (op === '+' || op === '-' || op === '*'
//                 || op === '/') {
//                 return op;
//             }else{
//                 return "$";
//             }
//         };

//         var calculator = {};
//         calculator.calculate = function(first, second, op){
//             var ret = first; //메서드 안에서 사용되는 변수(객체의 멤버 변수 x)
//             switch(op){
//                 case '+':
//                 ret += second;
//                 break;

//                 case '-':
//                 ret -= second;
//                 break;

//                 case '*':
//                 ret *= second;
//                 break;

//                 case '/':
//                 ret /= second;
//                 break;

//                 default: 
//                 return NaN;
//             }
//             return ret;
//         };

//         var output = {};
//         output.out = document.getElementById('output');

//         output.print = function(value){
//             this.out.innerHTML = '최종 결과값은' +value+'입니다.';
//         };

//         function calc(){
//             var str = document.getElementById('input').value;
//             input.init(str);
//             var result = input.getValue();
//             console.log(result);
//             while (!input.empty()){ //비어있지 않을 때 실행, 비어있으면 실행X
//                 var op = input.getOperator();
//                 console.log(op);
//                 var second = input.getValue();
//                 console.log(second);
//                 result = calculator.calculate(result, second, op);
//                 console.log(result);
//             }
//             output.print(result);
//         }