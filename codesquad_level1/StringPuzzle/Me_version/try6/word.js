var random_list = 'apple,michelle,frank,programmer,helloworld,ruru,newyork,youonlyliveonce,sanfransico,november'.split(',');
var base_str = document.getElementById('base-str');
var show_result = document.getElementById('result');
var quiz_btn = document.getElementById('quiz-btn');
var scoreboard = document.getElementById('score-board');

game = {};
game.word = '';
game.word_list = [];
game.btn_list = []; //버튼의 리스트 
game.toggle = Math.floor(Math.random()*2);
game.score = 0;
// game.maxPlaying = 3;

game.choice_word = function(){
    this.word = random_list[Math.floor(Math.random()*10)]; 
    this.word_list = this.word.split("");
    base_str.innerHTML = this.word;
};

game.btn_init = function(){
    while (quiz_btn.hasChildNodes()){
        quiz_btn.removeChild(quiz_btn.firstChild);
    }
    this.btn_list = [];
    for (var i = 0; i < this.word.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        quiz_btn.appendChild(btn);
        this.btn_list.push(btn);
    }
}

game.update = function(){
    for (var i=0; i<this.word_list.length; i++){
        this.btn_list[i].innerHTML = this.word_list[i];
    }
}

game.check = function(){
    if (this.word === this.word_list.join('')){
        this.score += 1;
        show_result.innerHTML = '일치합니다.';
        scoreboard.innerHTML += 'O';
        if (this.score >=3){
            var endTime = new Date().getTime();
            alert('Thank you for playing!\n소요시간은 '+(endTime-startTime)/1000+'입니다.');
        }else{
            new_quiz();
        }
    }else{
        show_result.innerHTML = '일치하지 않습니다.';
    }
};


var shiftLeft = function(event){ //특이사항: game의 메서드로 만드니까 html에서 찾지 못함.
    var s = game.word_list.shift();
    game.word_list.push(s);
    game.update();
    game.check();
};

var shiftRight = function(event){ //특이사항: game의 메서드로 만드니까 html에서 찾지 못함.
    var s = game.word_list.pop();
    game.word_list.unshift(s);
    game.update();
    game.check();
}

var swap = function(event){ //특이사항: game의 메서드로 만드니까 html에서 찾지 못함.
    game.word_list = game.word_list.reverse();
    game.update();
    game.check();
}

//단어 길이의 랜덤값만큼 오른쪽으로 이동하여 출력. but 원본 단어를 바꾸지 않기 떄문에 객체 사용 안함.
var shuffle = function(){ 
    var n = Math.floor(Math.random() * game.word.length);
    for (var i = 0; i < n; i++){
        shiftRight();
    }
};

var new_quiz = function(event){
    game.word = '';
    game.word_list = [];
    game.btn_list = [];
    game.choice_word();
    game.btn_init();
    if (game.toggle){
        swap();
    }
    shuffle();
    game.check();
};

var startTime = new Date().getTime();
game.choice_word();
game.btn_init();
if (game.toggle){
    swap();
}
shuffle();
game.check(); //우연히 문제가 바로 맞았을 때, 버튼의 문자열을 확인하지 못하고 바로 O가 생긴 후 새로운 문제가 넘어감. -> UI 오류.




