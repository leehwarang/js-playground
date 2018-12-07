var random_list = 'apple,michelle,frank,programmer,helloworld,ruru,newyork,youonlyliveonce,sanfransico,november'.split(',');
var base_str = random_list[Math.floor(Math.random()*10)];

game = {};

game.word_list = base_str.split(""); //단어의 리스트
game.btn_list = []; //버튼의 리스트 
game.base_btns = document.getElementById('btns-group');

game.init = function(){
    for (var i = 0; i < base_str.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = base_str[i];
        this.base_btns.appendChild(btn);    
        this.btn_list.push(btn);
    }
}

game.update = function(){

    for (var i=0; i<this.word_list.length; i++){
        this.btn_list[i].innerHTML = this.word_list[i];
    }
}

game.init();


var shiftLeft = function(event){
    var s = game.word_list.shift();
    game.word_list.push(s);
    game.update();
};

var shiftRight = function(event){
    var s = game.word_list.pop();
    game.word_list.unshift(s);
    game.update();
}

var Swap = function(event){
    game.word_list = game.word_list.reverse();
    game.update();
}