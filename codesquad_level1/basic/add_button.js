//리스트 붙이기
var el = document.getElementById('test');
var menu = document.createElement('ul');
menu.id = 'menupan';

var item1 = document.createElement('li');
item1.innerHTML = '비건 부리또';

var item2 = document.createElement('li');
item2.innerHTML = '비건 파스타';

menu.appendChild(item1);
menu.appendChild(item2);

el.appendChild(menu)

//btn 붙이기
var read = function(){
    var input = document.getElementById('input1');
    console.log("네. 손님."+input1.value+"을 준비해드리겠습니다.");
}

var btn2 = document.createElement('button');
btn2.innerHTML = 'click';
btn2.onclick = read;
var btn_test = document.getElementById('btn-test');
btn_test.appendChild(btn2);