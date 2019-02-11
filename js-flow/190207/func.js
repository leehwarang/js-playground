//함수 스코프와 실행 컨텍스트

// var a = 1;
//
// function outer(){
//     console.log(a);
//
//     function inner(){
//         console.log(a);
//         var a = 3;
//     }
//
//     inner();
//
//     console.log(a);
// }
//
// outer();
// console.log(a);


console.log(Hi());
console.log(Hello());

function Hi(){
    return 'hi!';
}

var Hello = function(){
    return 'hello!';
}