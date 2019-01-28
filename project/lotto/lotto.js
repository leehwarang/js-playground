let btns = document.querySelectorAll(".btn-num");

/**
 * 4. 이 아래에 있는 코드들은 class로 묶는 것이 좋겠다고 생각하였습니다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
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
  bonusCompare: function() {
    return user.choice_num.includes(String(this.bonus_num));
  },
  Compare: function() {
    this.cnt = 0;
    this.bonus_num = this.random_num.pop();
    console.log(this.bonus_num);

    for (let i = 0; i < user.choice_num.length; i += 1) {
      if (this.random_num.includes(Number(user.choice_num[i]))) {
        this.cnt += 1;
      }
    }
    return this.cnt;
    /**
     * 9. Array를 모두 순회해야 한다면 사용해야 하는 메소드들이 있습니다.
     * (순회하면서 하는 역할에 따라 reduce, map, filter, find, find 등)
     * 이때는 순회하면서 this.random_num에 포함되어있는지 여부에 따른 횟수를 합산해야 하므로 첫 번째 for문은 reduce로 대체해도 좋을 것 같습니다.

     * 10. array는 포함여부를 검사하려면 계속해서 모두 순회해야하므로 이 경우에는 적합하지 않습니다.
     * 숫자가 선택될 때마다 객체에 저장해놓고 값을 조회했을 때의 true/false 여부로 숫자 일치 여부를 확인하면 퍼포먼스적으로 훨씬 좋을 것 같습니다.
     */
  },
  showResult: function() {
    // 11. alert 안에 있는 메시지들이 반복되므로 message를 만드는 함수 등으로 중복을 제거하면 좋을 것 같습니다.
    if (this.cnt === 6) {
      alert("축하합니다! 1등이에요!");
    } else if (this.cnt === 5) {
      if (this.bonusCompare()) {
        // 12. 7번과 달리 window 밑에서 참조할 수 없으므로 Uncaught ReferenceError: bonusCompare is not defined 가 발생할 것 같습니다.
        alert("축하합니다! 2등이에요!");
      } else {
        alert("축하합니다! 3등이에요!");
      }
      /**
       * 13. bonusCompere() 가 반환하는 값이 boolean 타입이므로 `if (bonusCompare())` 도 좋을 것 같습니다.
       * 또한 이때는 true/false에 따라 다른 값을 리턴해주는 상황이니 삼항연산자도 고려해볼 수 있을 것 같습니다.
       * (true/false의 차이에 따라 2 또는 3)
       * 그런 점에서 6은 1, 5는 2 등 각각 숫자에 등수를 매핑할 수 있다면 showResult 자체가 매우 짧아질 수 있을 것 같습니다.
       * (gradeMap[6] === 1)
       */
    } else if (this.cnt === 4) {
      alert("축하합니다! 4등이에요!");
    } else if (this.cnt === 3) {
      alert("축하합니다! 4등이에요!");
    } else {
      alert("꽝!");
    }
  },
  shuffle: function(arr) {
    for (let i = arr.length; i > 0; i -= 1) {
      let pick = Math.floor(Math.random() * i);

      let temp = arr[i - 1];
      arr[i - 1] = arr[pick];
      arr[pick] = temp;
    }
    return arr;
  },
  random_choice: function() {
    let dummy = [];
    for (let i = 1; i < 46; i += 1) {
      dummy.push(i);
    }

    this.shuffle(dummy);

    /**
     * 14. call by value, call by reference
     * 지금의 로직은 위 키워드와 관련이 있고 중요한 부분이므로 꼭 이해하고 넘어가시면 좋을 것 같습니다.

     * 아래 부분은 짧게 설명드리기 어려운 부분이고, 정답이 없는 영역이지만 참고삼아 남겨봅니다.
     * 위 로직은 딱 저 순서대로 실행해야만 동작하는 로직이고, return 값으로 소통하는 것이 아니라서 나중에 디버깅이 쉽지 않을 수도 있습니다.
     * `순수 함수` 라는 키워드도 찾아보시면 참 좋을 것 같습니다. (추가적으로는 높은 응집성과 낮은 의존성)
     */

    for (let i = 0; i < 7; i += 1) {
      this.random_num.push(dummy[i]);
      this.random_btn.push(btns[dummy[i] - 1]);

      i == 6
        ? (this.random_btn[i].style.borderColor = "#FFD740")
        : (this.random_btn[i].style.borderColor = "red");
    }

    console.log(`로또에서 추첨한 숫자: ${this.random_num}`);

    let correct_cnt = this.Compare();
    console.log(`맞춘 개수: ${correct_cnt}`);
    this.showResult();
  }
};

// 숫자 버튼에 클릭했을 때 이벤트를 저장하는 코드
/**
//    * 17. Event Delegation, Capturing, Bubbling 중에 모르시는 키워드가 있다면 학습하시면 좋을 것 같습니다.
//    * https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
//    * 해보시면 아시겠지만, 사용자가 button tag가 아닌 td tag도 누를 수 있기 때문에, 그런 경우에 대한 처리가 필요합니다.
//    * 관련하여 Event Delegation에 대해 학습하시면 도움이 되실 것 같습니다.
//    */
document.addEventListener("DOMContentLoaded", function() {
  document
    .querySelector(".btns-num")
    .addEventListener("click", function(event) {
      user.choice_num.push(event.target.innerHTML);
      event.target.style.backgroundColor = "#2196F3";
      if (user.choice_num.length === 6) {
        alert("모든 숫자를 다 입력하셨습니다.");
        console.log("사용자가 입력한 숫자:" + user.choice_num);
        lotto.random_choice();
      }
    });
});

/**
 * 18. 게임이 끝난 뒤에 재시작할 수 있는 기능이 필요할 것 같습니다.
 * (다시 버튼이 눌리면 처음부터 시작하면서 첫 번째 숫자가 선택된 것으로 처리하거나 초기화를 위한 재시작 버튼이 따로 존재하거나 등)
 *
 * 19. 이미 선택된 번호가 다시 선택되지 않도록 하는 처리도 필요할 것 같습니다.
 *
 * 20. HTML에서는 절대참조를 통해 컴퓨터 주소 그대로를 넣기 보다는 상대참조로 파일을 가려오도록 하는 것이 좋을 것 같습니다.
 */
