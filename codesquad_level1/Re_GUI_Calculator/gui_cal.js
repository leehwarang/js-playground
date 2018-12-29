var display = document.getElementById('display-board');
var input = {};
input.btn_list = [];
input.btn_str = '';


input.init = function(){
    input.btn_list = [];
}

input.displayUpdate = function(){
    this.btn_str = this.btn_list.join("");
    display.innerHTML = this.btn_str;
};

input.add_btn = function (e){
   if (e.target.className == 'btns-num'){
       this.btn_list.push(e.target.innerHTML);
       this.displayUpdate();
   }else if(e.target.className == 'btns-operator'){
       this.btn_list.push(' '+e.target.innerHTML+' ');
       this.displayUpdate();
   }
}

document.addEventListener('DOMContentLoaded', input.init());

//이벤트 위임 방식으로 구현
var btns_group = document.getElementById('btns-group').addEventListener('click', function(e){
    if (e.target && e.target.nodeName == 'BUTTON'){
        input.add_btn(e);
    };
})