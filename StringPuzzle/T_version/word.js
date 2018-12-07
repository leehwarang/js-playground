
var word2 = document.getElementById('word2')

var words = 'apple,linux,javascript,tutorials,codesquad,baby,girifriend,legend'.split(',');

var word1 = document.getElementById('word1');
var show = document.getElementById('check');

var game = {};

game.choice = function(){
    var idx = Math.floor(Math.random()*words.length);
    return words[idx];
}
var answer = game.choice(); //이전에는 html에서 지정된 문자열을 가져와 answer로 지정했음
word1.innerHTML = answer;

game.word = answer.split('');
game.btns = [];
game.copy = function(){
    for (var i = 0; i < this.word.length; i++){
        this.btns[i].innerHTML = this.word[i];
    }
};

game.check = function(){
    if (answer === this.word.join('')){
        show.innerHTML = '일치합니다.';
    }else {
        show.innerHTML = '일치하지 않습니다.';
    }
};


for (var i = 0; i < answer.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = answer[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

var swap = function (event) {
    game.word = game.word.reverse();

    game.copy();
    game.check();
    
};

var rshift = function (event) {
    var s = game.word.pop();
    game.word.unshift(s);
    
    game.copy();
    game.check();
};

var lshift = function (event) {
    console.log('lshift');
    var s = game.word.shift();
    game.word.push(s);

    game.copy();
    game.check();
};

//shuffle

var toggle = Math.floor(Math.random()*2) === 0;

if (toggle){
    swap();
}

var n = Math.floor(Math.random() * answer.length);

for (var i=0; i<n; i++){
    rshift();
}

game.check();