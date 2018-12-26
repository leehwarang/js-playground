var input = {};
input.btn_list = [];

input.init = function(){
    input.btn_list = [];
}

input.add_btn = function (e){
   //this.btn_list.push()
   if (e.target.className == 'btns-num'){
       this.btn_list.push(e.target.innerHTML);
       console.log(this.btn_list);
   }else if(e.target.className == 'btns-operator'){
       this.btn_list.push(' '+e.target.innerHTML+' ');
       console.log(this.btn_list);
   }
}


document.addEventListener('DOMContentLoaded', input.init());
//이벤트 위임 방식으로 구현
var btns_group = document.getElementById('btns-group').addEventListener('click', function(e){
    // console.log('[taget]: '+ e.target);
    // console.log('[target.nodeName]: ' + e.target.nodeName);
    if (e.target && e.target.nodeName == 'BUTTON'){
        input.add_btn(e);
    };
})