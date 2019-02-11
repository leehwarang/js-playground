//arguments: 함수를 호출하면 매개변수로 전달되는 인자값이 유사 배열의 형태로 호출되는 함수로 전달된다.
//이 arguments를 이용하면 매개 변수의 개수가 정확하게 정해지지 않지만 행동이 같을 때 사용할 수 있다.

function sum(){
    var result = 0;

    for (var i=0; i<arguments.length; i+=1){
        result += arguments[i];
    }

    return result;
}

console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5))


//apply()메서드를 활용한 arguments 객체

function myFunction(){
    console.dir(arguments);

    arguments.shift();

    var args = Array.prototype.slice.apply(arguments);
    console.log(args);
}

myFunction(1,2,3);


function convertArgsToArray(){
    console.log(arguments);

    var arr = Array.prototype.slice.apply(arguments);

    console.log(arr);
    return arr;
}

convertArgsToArray(1,2,3);