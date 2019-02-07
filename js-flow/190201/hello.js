// call by value 와 call by reference 의 차이

var a = 100;
var objA = {
    'value' : 100
};

function change(num, obj){
    num = 200;
    obj.value = 200;

    console.log(num); //200
    console.log(obj.value); //200
};

change(a, objA);

console.log(a); //100
console.log(objA.value); //200

// 배열의 프로토타입과 객체의 프로토 타입 비교

var emptyArray = [];
var emptyObj = {};

// console.log(typeof b);
// console.log(typeof objB);

console.log(emptyArray.__proto__);
console.log(emptyObj.__proto__);

// console.log(typeof emptyArray);
// console.log(typeof emptyObj);