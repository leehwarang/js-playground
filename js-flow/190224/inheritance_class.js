function Person(arg){
    this.name = arg;
}

Person.prototype.setName = function(value){
    this.name = value;
}

Person.prototype.getName = function(){
    return this.name;
}

function Student(){}

var you = new Person("iamjoo");
Student.prototype = you;

var me = new Student("zzoon"); //iamjoo
me.setName("zzoon");
console.log(me.getName()); //zzoon