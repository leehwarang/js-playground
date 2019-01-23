/**
 * 0. Prettier(formatter), ESLint(linter)
 * 두 가지를 설정하시는 것이 많은 도움이 되실 것 같습니다.
 * https://www.youtube.com/watch?v=ya78lQi5vVI
 * 영상에서는 마치 Visual Studio Code의 Extension인 것처럼 소개되었는데, 그렇지는 않습니다.
 * https://prettier.io/
 * ESLint 관련해서는 아래 페이지를 참고하시면 될 것 같습니다.
 * https://velog.io/@velopert/eslint-and-prettier-in-react
 * https://eslint.org/
 */

//초기화 코드 추가 필요. <- 1. 일반적으로 주석을 쓸 때는 가독성을 위해 // 뒤에 한 칸을 띄어주시면 좋습니다. https://github.com/airbnb/javascript#comments--spaces

var btns = document.getElementsByClassName("btn-num");
/**
 * 2. document.querySelector
 * 취향 문제일 수 있지만 저는 document.querySelector, document.querySelectorAll 를 선호합니다.
 * id냐 class냐 등의 문제와 상관없이 사용할 수 있기에
 * const $ = document.querySelector;
 * const $$ = document.querySelectorAll;
 * 위와 같이 줄여서 가독성을 확보할 수 있습니다.

 * 3. var, let, const
 * 세 가지는 많은 차이점이 있습니다.
 * https://blueshw.github.io/2017/03/28/ES-var-VS-const-VS-let/

 * 기능상의 차이점 외에 브라우저 지원율에서도 차이가 존재합니다.
 * https://caniuse.com/#search=let
 * IE를 지원해야 할 경우에는 ES2015를 그대로 사용하면 브라우저가 해석할 수 없으므로 Transpiling을 거쳐야 합니다.
 * https://babeljs.io/

 * React 등을 통해 개발할 때는 webpack 등의 bundler를 사용해서 bundling을 거치게 되는데 그 과정에서 babel도 함께 거치곤 합니다.
 * webpack 등과 관련한 부분은 Front-End 개발자들이 가장 괴로워하는 부분 중 하나이므로 나중에 학습하셔도 될 것 같습니다.
 */

/**
 * 4. 이 아래에 있는 코드들은 class로 묶는 것이 좋겠다고 생각하였습니다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
 */

// 사용자에 관련된 객체
var user = {
  choice_num: [],
};

// 로또 생성기에 관련된 객체
var lotto = {
  random_btn: [],
  random_num: [],
  bonus_num: 0,
  cnt: 0,
  bonusCompare: function() {
    /**
     * 5. 이런 목적에는 Array method 중에 적합한 것이 있습니다.
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     * MDN 문서에 나와있는 Array method 들을 몇 번 읽어보셔서 프로그래밍 하실 때 어? 이때 적합한 method가 있었던 것 같은데.. 정도로 떠올리실 수 있게 되면 좋을 것 같습니다.
     */
    for (var k = 0; k < this.random_num.length; k++) {
      if (this.bonus_num === this.random_num[k]) {
        return true;
      }
    }
  },
  startCompare: function() {
    /**
     * 6. 프로그래밍에서 가장 어려운 것중 하나가 작명입니다.
     * start를 붙여서 얻는 이득이 없다면 다른 이름으로 바꿔도 좋을 것 같습니다.
     */
    cnt = 0;
    bonus_num = this.random_num.pop();
    for (var i = 0; i < this.random_num.length; i++) {
      for (var j = 0; j < user.choice_num.length; j++) {
        if (this.random_num[i] == user.choice_num[j]) {
          cnt += 1;
        }
      }
    }
    /**
     * 7. 의도하신 것은 this.cnt 이실텐데 실제로는 var가 없는 것으로 인해 window.cnt에 0을 할당한 결과가 발생했을 것입니다.
     * scope chaining을 거치면서 이름이 같은 cnt를 참조하게 된 것이어서 아래 라인은 this.cnt = 0이 되었어야 합니다. (bonus_num도 동일)
     * https://boycoding.tistory.com/29
     * http://www.nextree.co.kr/p7363/
     */

    return cnt;
    /**
     * 8. 같은 기능이라면 언어에서 제공해주는 방법으로 해결하는 것이 좋습니다.
     * 가독성 측면에서도 그렇고, 부차적으로는 브라우저가 계속해서 업데이트되면서 언어 내장 메소드들의 성능이 좋아지기 때문입니다.

     * 9. Array를 모두 순회해야 한다면 사용해야 하는 메소드들이 있습니다.
     * (순회하면서 하는 역할에 따라 reduce, map, filter, find, find 등)
     * 이때는 순회하면서 this.random_num에 포함되어있는지 여부에 따른 횟수를 합산해야 하므로 첫 번째 for문은 reduce로 대체해도 좋을 것 같습니다.
     * 포함되어있는지 여부를 검사해야 하는 두 번째 for문은 아래 includes로 대체하면 좋을 것 같습니다
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
     * 다만 코드가 동작하는 환경에 따라선 사용하지 못할 수도 있습니다. https://caniuse.com/#search=includes

     * 10. array는 포함여부를 검사하려면 계속해서 모두 순회해야하므로 이 경우에는 적합하지 않습니다.
     * 숫자가 선택될 때마다 객체에 저장해놓고 값을 조회했을 때의 true/false 여부로 숫자 일치 여부를 확인하면 퍼포먼스적으로 훨씬 좋을 것 같습니다.
     */
  },
  showResult: function() {
    console.log(bonusCompare);
    // 11. alert 안에 있는 메시지들이 반복되므로 message를 만드는 함수 등으로 중복을 제거하면 좋을 것 같습니다.
    if (this.cnt === 6) {
      alert("축하합니다! 1등이에요!");
    } else if (this.cnt === 5) {
      if (bonusCompare() === true) {
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
    for (var i = arr.length; i > 0; i--) {
      // ++ 또는 --는 다음과 같은 이유로 권장되지 않습니다. https://eslint.org/docs/rules/no-plusplus
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

    /**
     * 14. call by value, call by reference
     * 지금의 로직은 위 키워드와 관련이 있고 중요한 부분이므로 꼭 이해하고 넘어가시면 좋을 것 같습니다.

     * 아래 부분은 짧게 설명드리기 어려운 부분이고, 정답이 없는 영역이지만 참고삼아 남겨봅니다.
     * 위 로직은 딱 저 순서대로 실행해야만 동작하는 로직이고, return 값으로 소통하는 것이 아니라서 나중에 디버깅이 쉽지 않을 수도 있습니다.
     * `순수 함수` 라는 키워드도 찾아보시면 참 좋을 것 같습니다. (추가적으로는 높은 응집성과 낮은 의존성)
     */

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
      // 위와 같은 케이스도 삼항 연산자를 사용하기 적합한 케이스라고 생각됩니다.
    }

    console.log("로또에서 추첨한 숫자:" + this.random_num);

    /**
     * 15. ES2015부터는 Template literal이라고 해서 문자열 안에 변수를 넣기에 좋아졌습니다.
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
     */

    var correct_cnt = this.startCompare();
    console.log("맞춘 개수: " + correct_cnt);
    this.showResult();
  },
};

//숫자 버튼에 클릭했을 때 이벤트를 저장하는 코드
document.getElementById("btns-num").addEventListener("click", function(event) {
  /**
   * 16. DOM에 이벤트를 붙이는 행위는 DOM이 모두 그려진 뒤에 이루어져야 하므로 `DOMContentLoaded` 시점에 EventListener를 추가하는 것도 좋을 것 같습니다.
   * https://developer.mozilla.org/ko/docs/Web/Events/DOMContentLoaded
   *
   * 17. Event Delegation, Capturing, Bubbling 중에 모르시는 키워드가 있다면 학습하시면 좋을 것 같습니다.
   * https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
   * 해보시면 아시겠지만, 사용자가 button tag가 아닌 td tag도 누를 수 있기 때문에, 그런 경우에 대한 처리가 필요합니다.
   * 관련하여 Event Delegation에 대해 학습하시면 도움이 되실 것 같습니다.
   */
  user.choice_num.push(event.target.innerHTML);
  event.target.style.backgroundColor = "#2196F3";
  if (user.choice_num.length === 6) {
    alert("모든 숫자를 다 입력하셨습니다.");
    console.log("사용자가 입력한 숫자:" + user.choice_num);
    lotto.random_choice();
  }
});

/**
 * 18. 게임이 끝난 뒤에 재시작할 수 있는 기능이 필요할 것 같습니다.
 * (다시 버튼이 눌리면 처음부터 시작하면서 첫 번째 숫자가 선택된 것으로 처리하거나 초기화를 위한 재시작 버튼이 따로 존재하거나 등)
 *
 * 19. 이미 선택된 번호가 다시 선택되지 않도록 하는 처리도 필요할 것 같습니다.
 *
 * 20. HTML에서는 절대참조를 통해 컴퓨터 주소 그대로를 넣기 보다는 상대참조로 파일을 가려오도록 하는 것이 좋을 것 같습니다.
 */
