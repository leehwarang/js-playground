var input = document.getElementById('todo-input');

var todo_list = document.getElementById('todo-list');

var i = 1;

function onClickHandler(e){
    console.log(e.target.checked);
    var checked_id = e.target.id;
    var label_list = document.getElementsByTagName('label');
    for (var i=0; i<label_list.length; i++){
        if (e.target.checked == true){
            if (label_list[i].getAttribute('for') === checked_id){
                label_list[i].style.textDecoration = "line-through";
            }
        }else{
            if (label_list[i].getAttribute('for') === checked_id){
                label_list[i].style.textDecoration = 'none';
            }
        }
    }
}


input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        if (input.value !== ''){
            var br = document.createElement('br'); //br도 하나의 태그. 
            var chk = document.createElement('input');   
            chk.setAttribute('type', 'checkbox');
            chk.setAttribute('id', 'thing'+i);
            chk.setAttribute('name', 'todothing');
            chk.setAttribute('onclick', 'onClickHandler(event)');

            var lbl = document.createElement('label')
            lbl.setAttribute('for', 'thing'+i)

            lbl.appendChild(document.createTextNode(input.value));

            todo_list.appendChild(chk);
            todo_list.appendChild(lbl);
            todo_list.appendChild(br);

            input.value = '';
            i += 1
        }
    }
        
});


// document.addEventListener('DOMContentLoaded', function(){
//     console.log("test");
// });

//엔터를 치면 해야할 일
//1. 입력 받은 것을 list의 항목으로 보내야함
//2. 엔터칠 때마다 list 동적으로 생성