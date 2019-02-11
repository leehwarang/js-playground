var value = 1;

var obj = {
    value : 100,
    fun1 : function(){
        setTimeout(function(){
            console.log("callback's this : ", this);
        },100);
    }
};

obj.fun1();