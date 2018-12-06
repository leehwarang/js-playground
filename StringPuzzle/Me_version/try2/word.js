
// var btns = document.getElementById('base-str');
// var btns_str = btns.innerHTML;

// var btns_group = document.getElementById('btns-group');

// for (var i = 0; i < btns_str.length; i++){
//     var btn = document.createElement('button');
//     btn.innerHTML = btns_str[i];
//     btns_group.appendChild(btn);    
// }

game = {};
game.base_str = document.getElementById('base-str').innerHTML;
game.base_list = game.base_str.split("");
game.base_btns = document.getElementById('btns-group');

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

game.init();



var shiftLeft = function(event){
    var s = game.base_list.shift();
    game.base_list.push(s);
    game.update();
};

var shiftRight = function(event){
    var s = game.base_list.pop();
    game.base_list.unshift(s);
    game.update();
}

var Swap = function(event){
    game.base_list = game.base_list.reverse();
    game.update();
}