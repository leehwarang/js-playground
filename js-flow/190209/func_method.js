//함수의 메서드: call, apply, bind
//목적: 명시적인 this 바인딩을 위함.
//call: 첫 번째 인자로 넣어준 것으로 this를 바꿀 수 있음
//참고자료: https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd

var example = function(a,b,c){
    return a + b + c;
}

console.log(example(1,2,3));
console.log(example.call(null, 1,2,3)); //null이 this를 대체.this가 window -> null로 변경
console.log(example.apply(null, [1,2,3]));
