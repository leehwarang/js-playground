///1) 객체로 반환
var Person = function(arg){
    var name = arg ? arg: "zzoon";

    return {
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };
};

var me = new Person();
console.log(me.getName());
me.setName("ruru");
console.log(me.getName());



//2) 함수로 반환
var Person2 = function(arg){
    var name = arg ? arg: "zzoon";

    var Func = function(){}
    Func.prototype = {
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };

    return Func;
};

var me = new Person2();
console.log(me.getName()); //클로저를 활용하여 외부에서 접근할 수 없게됨.
me.setName("ruru");
console.log(me.getName());

