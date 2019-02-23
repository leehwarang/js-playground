// 1. 접근 권한 제어 2. 지역 변수 보호 3. 데이터 보존 및 활용
// 내부에서 권한을 주면, 외부에서는 내부에 있는 데이터의 값을 변경 할 수 있음.

//outerFunc()의 실행 컨텍스트가 종료되지 않았기 때문에, innerFunc()를 호출했을 때 x에 접근할 수 있음. (클로저 X)
// function outerFunc(){
//     var x = 10;
//     var innerFunc = function(){
//         console.log(x)
//     }
//     innerFunc();
// }
// outerFunc();

//outerFunc()의 실행 컨텍스트가 종료 되었는데도, inner()를 호출했을 때 x에 접근할 수 있음.
//왜냐하면 return function 했을 때도 함수가 최초 선언 되었을 때의 정보를 유지하기 때문에
//클로저: 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수

// function outerFunc(){
//     var x = 10;
//     var innerFunc = function(){
//         console.log(x);
//     }
//     return innerFunc;
// }
//
// var inner = outerFunc();
// inner();




