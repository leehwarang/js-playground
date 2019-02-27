function Person(name, age){
    this._name = name;
    this._age = age;
}

Person.getInformations = function(instance){
    return {
        name : instance._name,
        age : instance._age
    }
}

Person.prototype.getName = function(){
    return this._name;
}

Person.prototype.getAge = function(){
    return this._age;
}

var gomu = new Person('고무', 30);

console.log(gomu.getName()); //고무
console.log(gomu.getAge()); //30

// console.log(gomu.getInformations(gomu)) //error
console.log(Person.getInformations(gomu));




