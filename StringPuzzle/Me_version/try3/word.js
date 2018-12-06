game = {};
game.base_str = document.getElementById('base-str').innerHTML;
game.base_list = game.base_str.split("");
game.base_btns = document.getElementById('btns-group');

game.shuffle = function(){
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabet_list = alphabet.split("");
    var s = '';
    for (var i = 0; i<5; i++){
        s += alphabet_list[Math.floor(Math.random()*24)+1];
    }
    console.log(s);
    this.base_str = s;
};

game.init = function(){
    for (var i = 0; i < this.base_str.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = this.base_str[i];
        this.base_btns.appendChild(btn);    
    }
}

game.update = function(){
    game.base_str = game.base_list.join("");

    for (var i=0; i<this.base_str.length; i++){
        this.base_btns.children[i].innerHTML = this.base_str[i];
    }
}

game.shuffle();
game.init();


var shiftLeft = function(event){
    game.base_list = game.base_str.split("");
    var s = game.base_list.shift();
    game.base_list.push(s);
    game.update();
};

var shiftRight = function(event){
    game.base_list = game.base_str.split("");
    var s = game.base_list.pop();
    game.base_list.unshift(s);
    game.update();
}

var Swap = function(event){
    game.base_list = game.base_str.split("");
    game.base_list = game.base_list.reverse();
    game.update();
}