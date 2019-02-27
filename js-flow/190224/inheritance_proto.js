//프로토 타입을 이용하여 상속 구현 + extend

var person = {
    name : 'zzoon',
    getName : function(){
        return this.name;
    },
    setName : function(arg){
        this.name = arg;
    }
};

function create_object(o){
    function F(){};
    F.prototype = o;
    return new F();
}

function extend(obj, prop){
    if (!prop) {prop = obj; obj=this;}
    for (var i in prop) obj[i] = prop[i];
    return obj;
}

var student = create_object(person);

var added = {
  setAge : function(age) {
      this.age = age;
    }, getAge : function(){
      return this.age;
    }
};

extend(student, added);

student.setName("me");
console.log(student.getName());
student.setAge(26);
console.log(student.getAge());
