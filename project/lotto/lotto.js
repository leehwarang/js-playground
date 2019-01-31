let btns = document.querySelectorAll(".btn-num");

/**
 * 4. 이 아래에 있는 코드들은 class로 묶는 것이 좋겠다고 생각하였습니다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
 *
 * 10. array는 포함여부를 검사하려면 계속해서 모두 순회해야하므로 이 경우에는 적합하지 않습니다.
 * 숫자가 선택될 때마다 객체에 저장해놓고 값을 조회했을 때의 true/false 여부로 숫자 일치 여부를 확인하면 퍼포먼스적으로 훨씬 좋을 것 같습니다.
 *
 * -> 위 두 피드백에 대해 UserNumber class를 생성하고 클릭할 때 마다 UserNumber 객체를 만들어봤었지만,
 * 후에 lotto.random_choice에서 어떻게 비교해야 하는지  잘 모르겠습니다.
 * 
 * class UserNumber {
    constructor(number) {
    this.number = number;
  }
}
 */

// 사용자에 관련된 객체
let user = {
  choice_num: []
};

// 로또 생성기에 관련된 객체
let lotto = {
  random_btn: [],
  random_num: [],
  bonus_num: 0,
  cnt: 0,
  grade: [],
  bonusCompare: function() {
    return user.choice_num.includes(this.bonus_num);
  },
  Compare: function() {
    this.cnt = 0;
    this.bonus_num = this.random_num.pop();
    console.log(this.bonus_num);

    for (let i = 0; i < user.choice_num.length; i += 1) {
      if (this.random_num.includes(user.choice_num[i])) {
        this.cnt += 1;
      }
    }
    return this.cnt;

    /**
     * 9. Array를 모두 순회해야 한다면 사용해야 하는 메소드들이 있습니다.
     * (순회하면서 하는 역할에 따라 reduce, map, filter, find, find 등)
     * 이때는 순회하면서 this.random_num에 포함되어있는지 여부에 따른 횟수를 합산해야 하므로 첫 번째 for문은 reduce로 대체해도 좋을 것 같습니다.
     *
     * -> 위 사례에서 reduce를 어떻게 적용할 수 있는지 잘 모르겠습니다.
     * includes를 사용해서 변경해보았는데, reduce를 이용한 방법도 알려주시면 감사드리겠습니다.
     */
  },
  message: function(cnt) {
    cnt < 3
      ? alert("꽝입니다.")
      : alert(`축하합니다! ${this.grade[cnt]} 등이에요!`);
  },
  showResult: function() {
    console.log(`맞춘 개수: ${this.cnt}`);
    switch (this.cnt) {
      case 6:
        this.grade[this.cnt + 1] = 1;
      case 5:
        this.bonusCompare()
          ? (this.grade[this.cnt + 1] = 2)
          : (this.grade[this.cnt] = 3);
      case 4:
        this.grade[this.cnt] = 4;
      case 3:
        this.grade[this.cnt] = 3;
      default:
        this.grade[this.cnt] = 0;
    }
    this.message(this.cnt);
  },
  shuffle: function() {
    let dummy = [];
    for (let i = 1; i < 46; i += 1) {
      dummy.push(i);
    }

    for (let i = dummy.length; i > 0; i -= 1) {
      let pick = Math.floor(Math.random() * i);

      let temp = dummy[i - 1];
      dummy[i - 1] = dummy[pick];
      dummy[pick] = temp;
    }
    return dummy;
  },

  random_choice: function() {
    let after_shuffle = this.shuffle();

    for (let i = 0; i < 7; i += 1) {
      this.random_num.push(after_shuffle[i]);
      this.random_btn.push(btns[after_shuffle[i] - 1]);

      i == 6
        ? (this.random_btn[i].style.borderColor = "#FFD740")
        : (this.random_btn[i].style.borderColor = "red");
    }

    console.log(`로또에서 추첨한 숫자: ${this.random_num}`);

    this.Compare();
    console.log(`맞춘 개수: ${this.cnt}`);
    this.showResult();
  }
};

// 숫자 버튼에 클릭했을 때 이벤트를 저장하는 코드
document.addEventListener("DOMContentLoaded", function() {
  let btns = document.querySelectorAll(".btn-num");
  for (let btn of btns) {
    btn.addEventListener("click", function(event) {
      user.choice_num.push(Number(event.target.innerHTML));
      // let b1 = new UserNumber(Number(event.target.innerHTML));
      event.target.style.backgroundColor = "#2196F3";
      if (user.choice_num.length === 6) {
        alert("모든 숫자를 다 입력하셨습니다.");
        console.log("사용자가 입력한 숫자:" + user.choice_num);
        lotto.random_choice();
      }
    });
  }
});
/**
 * 이전 피드백 적용 후 추가 기능 구현 예정
 * 18. 게임이 끝난 뒤에 재시작할 수 있는 기능이 필요할 것 같습니다.
 * (다시 버튼이 눌리면 처음부터 시작하면서 첫 번째 숫자가 선택된 것으로 처리하거나 초기화를 위한 재시작 버튼이 따로 존재하거나 등)
 *
 * 19. 이미 선택된 번호가 다시 선택되지 않도록 하는 처리도 필요할 것 같습니다.
 *
 */
