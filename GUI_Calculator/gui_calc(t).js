var input = {'array': []};

input.getInput = function(){
    return this.array.join(""); //배열의 원소를 연결하여 하나의 값으로 만듦.(dafault값은 ,)
}

var output = {};

output.text = document.getElementById('output'); //div 태그 자체가 output.text임.
                                                //이 문장을 써주지 않으면 output.text가 div태그를 의미하지 않음.



var clickNumbers = function(event){ //객체를 눌렀을 때 객체 자체가 event로 넘어옴
    console.log("num click");
    var str = event.target.innerHTML;
    console.log(str);

    switch(str){
        case "BS":
        input.array.pop();
        break;
        case "+":
        case "-":
        case "*":
        case "/":
        input.array.push(' '+str+' ');
        break;
        default:
        input.array.push(str);
    }

    if (input.array.length === 0){
        output.text.innerHTML = 'Empty';
    }else{
        output.text.innerHTML = input.getInput(); //output.text의 innerHTML을 설정하는 것, 
    }
};

var showResult = function(event){
    console.log("num others");
    console.log(event.target.innerHTML);
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