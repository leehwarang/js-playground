//this: 함수를 호출하면 arguments 객체와 같이 호출되는 함수에 전달된다.
// this는 함수가 호출되는 방식에 따라 다른 객체를 참조(this 바인딩)한다.

// 1.객체의 메서드를 호출 할 때 this 바인딩

var objA = {
    name : 'A',
    sayName : function(){
        console.log('my name is ' + this.name);
    }
};

var objB = {
    name : 'B'
}

objB.sayName = objA.sayName;

objA.sayName();
objB.sayName();

// 2.내부 함수에서의 this 바인딩

var value = 100;

var mainObj = {
    value : 1,
    fun1 : function(){
        that = this;
        this.value += 1;
        console.log('fun1() called. this.value : ' + this.value);

        func2 = function(){
            that.value += 1;
            console.log('fun2() called. this.value : ' + that.value);

            func3 = function(){
                that.value += 1;
                console.log('fun3() called. this.value : ' + that.value);
            }

            func3();
        }

        func2();
    }
};

mainObj.fun1();