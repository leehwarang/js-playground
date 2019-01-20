//초기화 코드 추가 필요.

var btns = document.getElementsByClassName("btn-num");

//사용자에 관련된 객체
var user = {
  choice_num: [],
};

//로또 생성기에 관련된 객체
var lotto = {
  random_btn: [],
  random_num: [],
  bonus_num: 0,
  cnt: 0,
  bonusCompare: function() {
    for (var k = 0; k < this.random_num.length; k++) {
      if (this.bonus_num === this.random_num[k]) {
        return true;
      }
    }
  },
  startCompare: function() {
    cnt = 0;
    bonus_num = this.random_num.pop();
    for (var i = 0; i < this.random_num.length; i++) {
      for (var j = 0; j < user.choice_num.length; j++) {
        if (this.random_num[i] == user.choice_num[j]) {
          cnt += 1;
        }
      }
    }
    return cnt;
  },
  showResult: function() {
    if (this.cnt === 6) {
      alert("축하합니다! 1등이에요!");
    } else if (this.cnt === 5) {
      if (bonusCompare() === true) {
        alert("축하합니다! 2등이에요!");
      } else {
        alert("축하합니다! 3등이에요!");
      }
    } else if (this.cnt === 4) {
      alert("축하합니다! 4등이에요!");
    } else if (this.cnt === 3) {
      alert("축하합니다! 4등이에요!");
    } else {
      alert("꽝!");
    }
  },
  shuffle: function(arr) {
    for (var i = arr.length; i > 0; i--) {
      var pick = Math.floor(Math.random() * i);

      var temp = arr[i - 1];
      arr[i - 1] = arr[pick];
      arr[pick] = temp;
    }
    return arr;
  },
  random_choice: function() {
    var dummy = [];
    for (var i = 1; i < 46; i++) {
      dummy.push(i);
    }

    this.shuffle(dummy);

    for (var i = 0; i < 7; i++) {
      this.random_num.push(dummy[i]);
      //console.log(this.random_num);
      //console.log(btns[dummy[i] - 1]);
      this.random_btn.push(btns[dummy[i] - 1]);
      //console.log(this.random_btn);

      if (i == 6) {
        this.random_btn[i].style.borderColor = "#FFD740";
      } else {
        this.random_btn[i].style.borderColor = "red";
      }
    }

    console.log("로또에서 추첨한 숫자:" + this.random_num);

    var correct_cnt = this.startCompare();
    console.log("맞춘 개수: " + correct_cnt);
    this.showResult();
  },
};

//숫자 버튼에 클릭했을 때 이벤트를 저장하는 코드
document.getElementById("btns-num").addEventListener("click", function(event) {
  user.choice_num.push(event.target.innerHTML);
  event.target.style.backgroundColor = "#2196F3";
  if (user.choice_num.length === 6) {
    alert("모든 숫자를 다 입력하셨습니다.");
    console.log("사용자가 입력한 숫자:" + user.choice_num);
    lotto.random_choice();
  }
});
