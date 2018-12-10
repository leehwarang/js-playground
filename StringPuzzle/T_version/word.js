//html elements
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById('word2'); //buttons
var check = document.getElementById('check'); //word1 === word2?


//game objects
var game = {'btns':[]};
game.words = 'apple,linux,javascript,tutorials,codesquad,baby,girifriend,legend'.split(',');

//choose 1 word from words
game.choose = function(){
    var idx = Math.floor(Math.random()*this.words.length);
    this.answer = this.words[idx]; //미리 answer객체를 선언하지 않고 바로 선언&할당 동시 가능.
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function(){
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.init = function(){
    this.choose();
    this.addButtons();
    this.updateDisplay();
};


game.updateDisplay = function(){
    var gameStr = this.letters.join('');
    if (this.answer === gameStr){
        check.innerHTML = '일치합니다.';
    }else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.copyBtnText = function(){
    for (var i = 0; i < this.letters.length; i++){
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event handler for swap button
var swap = function () {
    var temp = [];
    //copy and swap
    while (game.letters.length != 0){
        var s = game.letters.pop();
        temp.push(s);
    }

    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();

    //원래 코드
    // game.word = game.word.reverse();
    // game.copy();
    // game.check();
};

var rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s);

    game.copyBtnText();
    game.updateDisplay();
};

var lshift = function () {
    console.log('lshift');
    var s = game.word.shift();
    game.word.push(s);

    game.copyBtnText();
    game.updateDisplay();
};

//shuffle
game.shuffle = function(){
    var toggle = Math.floor(Math.random()*2) === 0;

    if (toggle){
        swap();
    }
    
    var n = Math.floor(Math.random() * game.answer.length);
    
    for (var i=0; i<n; i++){
        rshift();
    }
};

//코드의 실행부
game.init(); //이전에는 html에서 지정된 문자열을 가져와 answer로 지정했음
game.shuffle();
game.updateDisplay();
