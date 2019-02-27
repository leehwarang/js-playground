function Person(name, age){
    this.name = name || '이름 없음';
    this.age = age || '나이 모름';
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.age;
}

// function Bridge(){}

function Employee(name, age, position){
    // this.name = name || '이름 없음';
    // this.age = age || '나이 모름';
    this.superClass(name,age);
    this.position = position || '직책 모름';
}

//
// Bridge.prototype = Person.prototype;
// Employee.prototype = new Bridge();
// Employee.prototype.constructor = Employee;
//
// Employee.prototype.getPosition = function(){
//     return this.position;
// }
//
// var e1 = new Employee('michelle', 26, 'programmer');
//
// console.dir(e1);

var extendClass = (function(){
    function Bridge(){}
    return function(Parent, Child){
        Bridge.prototype = Parent.prototype;
        Child.prototype = new Bridge();
        Child.prototype.constructor = Child;
        Child.prototype.superClass = Parent;
    }
})();

extendClass(Person, Employee);

Employee.prototype.getPosition = function(){
    return this.position;
}

var e1 = new Employee('michelle', 26, 'programmer');

console.dir(e1);