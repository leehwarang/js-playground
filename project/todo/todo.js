var input = document.getElementById('todo-input');

var todo_list = document.getElementById('todo-list');

var i = 1;


input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        if (input.value !== ''){
            var chk = document.createElement('input');   
            chk.setAttribute('type', 'checkbox');
            // chk.setAttribute('value', input.value);
            chk.setAttribute('id', 'thing'+i);
            chk.setAttribute('name', 'todothing');

            var lbl = document.createElement('label')
            lbl.setAttribute('for', 'thing'+i)

            lbl.appendChild(document.createTextNode(input.value));


            todo_list.appendChild(chk);
            todo_list.appendChild(lbl);

            input.value = '';
            i += 1

        }
    }
        
});


document.addEventListener('DOMContentLoaded', function(){
    console.log("test");
});

//엔터를 치면 해야할 일
//1. 입력 받은 것을 list의 항목으로 보내야함
//2. 엔터칠 때마다 list 동적으로 생성