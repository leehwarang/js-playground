//새로고침 눌렀을 때 맞는지 검사하는게 아니라, 뒤집기/오,왼shift 키를 눌렀을 때만 맞는지 검사해야함..
//test code의 필요성?


//html elements
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById('word2'); //buttons
var check = document.getElementById('check'); //word1 === word2?
var progress = document.getElementById('progress'); //progress check
var time = document.getElementById('time');


//game objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};



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

game.removeButtons = function(){
    for(var i = 0; i<this.btns.length; i++){
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
}

game.checkCorrect = function(){
    return this.answer === this.letters.join('');
}

game.updateDisplay = function(){
    if (this.checkCorrect()){
        check.innerHTML = '일치합니다.';
    }else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.init = function(){
    this.choose();
    this.addButtons();
    this.updateDisplay();
};

game.copyBtnText = function(){
    for (var i = 0; i < this.letters.length; i++){
        this.btns[i].innerHTML = this.letters[i];
    }
};

game.swap = function(){
    var temp = [];
    //copy and swap
    while (this.letters.length != 0){
        var s = this.letters.pop();
        temp.push(s);
    }

    this.letters = temp;
    this.copyBtnText();
    this.updateDisplay();
};

game.rshift = function(){
    var s = this.letters.pop();
    this.letters.unshift(s);

    this.copyBtnText();
    this.updateDisplay();
};

game.lshift = function(){
    var s = this.letters.shift();
    this.letters.push(s);

    this.copyBtnText();
    this.updateDisplay();
};



game.progress = function(){
    if (this.checkCorrect()){
        this.current ++;
        this.removeButtons();
        this.init();
        this.shuffle();
        var str = "";
        for (var i = 0; i <this.current; i++){
            str += "O"
        }
        progress.innerHTML = str;
    }
    if (this.current == this.maxPlay){
        var sec = (Date.now() - game.startTime)/1000;
        clearInterval(x);
        // alert('Good! Your Record: '+ms+ ' sec');
        alert('Good! Your Record: '+sec+ ' sec');
    }
};

//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};

//shuffle
game.shuffle = function(){
    var toggle = Math.floor(Math.random()*2) === 0;

    if (toggle){
        game.swap();
    }
    
    var rmax = Math.max(game.answer.length - 2, 1);
    var n = Math.floor(Math.random() * rmax) + 1;
    
    for (var i=0; i<n; i++){
        game.rshift();
    }
};

var updateTime = function(){
    var now = Date.now() - game.startTime;
    time.innerHTML = now/1000 + "s";
}

//코드의 실행부
game.startTime = Date.now();
game.init(); //이전에는 html에서 지정된 문자열을 가져와 answer로 지정했음
game.shuffle();
game.updateDisplay();
var x = setInterval(updateTime, 50);
