function Person(arg){
    this.name = arg;
}

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}

Person.method("setName", function(value){
    this.name = value;
});

Person.method("getName", function(){
    return this.name;
});

function Student(arg){
    this.name = arg;
}

function Dummy(){};

Dummy.prototype = Person.prototype; //Dummy가 Person의 프로토타입을 사용할 수 있게됨.
Student.prototype = new Dummy();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student("zzone");
// me.setName("zzone");
console.log(me.getName());