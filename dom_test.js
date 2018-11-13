//js를 이용하여 html을 동적으로 제어하는 것 = DOM

var a = document.getElementsByTagName('h2');
a[0].innerHTML = "Good morning!";
a[1].innerHTML = "Thank you";

var p = document.getElementById('main');
p.innerHTML = "Have a good time :)"