var a = 10;

var obj = {
    a : 20,
    b : function(){
        // var self = this;
        console.log(this.a);

        function c(){
            console.log(this.a);
        }
        c();
    }
}

obj.b();
