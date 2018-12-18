//난 update할 때 마다 버튼들을 모두 불러와서 그 안에 문자열을 대입 
//강사님은 버튼 자체를 버튼 리스트로 만들어서 그 안에 문자열을 대입
//처음에 base문자열로 버튼의 innerHTML을 만들 당시에, 버튼 리스트를 만듦.
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