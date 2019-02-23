//closure로 private member 만들기
//외부에서 접근하지 못하게 해야 하는 것은 지역 변수로 만들고, 외부에 노출 할 기능만을 리턴

var car = {
    fuel : 10,
    power: 2,
    total : 0,
    run : function(km){
        var wastefuel = km / this.power;
        if (this.fuel < wastefuel){
            console.log("이동 불가")
            return;
        }
        this.fuel -= wastefule;
        this.total += km;
    }
};

var createCar = function(f, p){
    var fuel = f;
    var power = p;
    var total = 0;

    return {
        run : function(km){
            var wastefuel = km / power;
            if (fuel < wastefuel){
                console.log("이동 불가");
                return
            }
            fuel -= wastefuel;
            total += km;
        }
    }
};

var c1 = new createCar(10, 2);
console.log(c1);
c1.run(6);


