var input = {};
input.array = [];

input.isEmpty = function(){
    if (this.array.length === 0){
        return true;
    }else{
        return false;
    }
};

input.toString = function(){
    return this.array.join("");
};

input.preparecal = function(){
    this.array = this.array.join("").split(" ");
}

input.getNumber = function(){
    return this.array.shift()
};

input.getOperator = function(){
    return this.array.shift()
};

input.removeAll = function(result){
    this.array = [];
    this.array.push(result);
}

var output = {};
output.text = document.getElementById('result');

output.display = function(){
    //output.text.innerHTML = input.array.join("");
    output.text.innerHTML = input.toString();
}

output.printResult = function(result){
    output.text.innerHTML = result; 
}

var calculator = {};


calculator.startCal = function(first_num, op, second_num){
    var ret;
    first_num = Number(first_num);
    second_num = Number(second_num);
    
    switch(op){
        case '+':
        ret = first_num + second_num;
        break;
        case '-':
        ret = first_num - second_num;
        break;
        case '*':
        ret = first_num * second_num;
        break;
        case '/':
        ret = first_num / second_num;
        break;
        default:
        alert("계산 할 수 없습니다.");
    };
    return ret;
};


var clickNumbers = function(event){
    str = event.target.innerHTML;

    switch(str){
        case 'BS':
        input.array.pop(str);
        break;
        case '+': 
        case '-': 
        case '*': 
        case '/': 
        input.array.push(' '+str+' ');
        break;
        default:
        input.array.push(str);
    }
    if (input.isEmpty()){
        //입력이 비어 있는 상태
        output.text.innerHTML = '0';
    }else{
        //입력이 있는 상태
        output.display();
    }    
};

var startCalculate = function(){
    input.preparecal();
    var result = input.getNumber();
    console.log(result);

    while(!input.isEmpty()){ //거짓이면 실행. 
        var op = input.getOperator();
        console.log(op);
        var second_num = input.getNumber();
        console.log(second_num);
        var result = calculator.startCal(result, op, second_num);
        console.log(result);
    }
    output.printResult(result);
    input.removeAll(result);

};