var random_list = 'apple,michelle,frank,programmer,helloworld,ruru,newyork,youonlyliveonce,sanfransico,november'.split(',');
var base_str = random_list[Math.floor(Math.random()*10)];
var show_result = document.getElementById('result');
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

game.check = function(){
    if (base_str === this.word_list.join('')){
        show_result.innerHTML = '일치합니다.';
    }else{
        show_result.innerHTML = '일치하지 않습니다.';
    }
};

var shiftLeft = function(event){
    var s = game.word_list.shift();
    game.word_list.push(s);
    game.update();
    game.check();
};

var shiftRight = function(event){
    var s = game.word_list.pop();
    game.word_list.unshift(s);
    game.update();
    game.check();
}

var Swap = function(event){
    game.word_list = game.word_list.reverse();
    game.update();
    game.check();
}

//단어 길이의 랜덤값만큼 오른쪽으로 이동하여 출력. but 원본 단어를 바꾸지 않기 떄문에 객체 사용 안함.
var shuffle = function(){ 
    var n = Math.floor(Math.random() * base_str.length);
    for (var i = 0; i < n; i++){
        shiftRight();
    }
};

game.init();
shuffle();
game.check();

//50%의 확률로 처음에 단어를 swap해서 보여줌
var toggle = Math.floor(Math.random()*2);

if (toggle){
    Swap();
}

