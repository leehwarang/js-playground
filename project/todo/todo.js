var input = document.getElementById('todo-input');

var todo_list = document.getElementById('todo-list');

document.addEventListener('DOMContentLoaded', function(){
    console.log("test");
    // var i = 1; -> 왜 오류나는지 생각해보기
    input.focus();
});

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

function mouseOver (e){
    console.log("mouseOver")
}

function mouseOut(e){
    console.log("mouseOut")
}
 
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        if (input.value !== ''){
            var div = document.createElement('div');
            div.setAttribute('class', 'div'+i);
            var br = document.createElement('br'); //br도 하나의 태그. 
            var chk = document.createElement('input');
            chk.setAttribute('type', 'checkbox');
            chk.setAttribute('id', 'thing'+i);
            chk.setAttribute('name', 'todothing');
            chk.setAttribute('class', 'div'+i);
            chk.setAttribute('onclick', 'onClickHandler(event)');

            var lbl = document.createElement('label')
            lbl.setAttribute('for', 'thing'+i)
            lbl.setAttribute('class', 'div'+i);

            lbl.appendChild(document.createTextNode(input.value));

            var btn1 = document.createElement('button');
            btn1.setAttribute('class', 'div'+i);
            // btn1.setAttribute('class', 'edit');
            btn1.innerHTML = '수정';
            btn1.addEventListener('click', function(e){
                var edit_str = prompt('수정된 할 일을 적어주세요.');
                console.log(edit_str);
                
                var els = document.getElementsByClassName(e.target.className);
                for (var el of els){
                    if (el.tagName === 'LABEL'){
                        el.innerHTML = edit_str;
                        // console.log(edit_lbl.innerHTML);

                    }
                }
            })

            var btn2 = document.createElement('button');
            btn2.setAttribute('class', 'div'+i);
            // btn2.setAttribute('class', 'delete');
            btn2.innerHTML = '삭제';
            btn2.addEventListener('click', function(e){
                alert('정말 삭제하시겠습니까?');
                var els = document.getElementsByClassName(e.target.className);
                for (var el of els){
                    todo_list.removeChild(el);
                }
            })

            todo_list.append(div);
            div.appendChild(chk);
            div.appendChild(lbl);
            div.appendChild(btn1);
            div.appendChild(btn2);
            div.appendChild(br);

            input.value = '';
            i += 1

            div.setAttribute('onmouseover', mouseOver());
            div.setAttribute('onmouseout', mouseOut());
        }
    }
        
});



//엔터를 치면 해야할 일
//1. 입력 받은 것을 list의 항목으로 보내야함
//2. 엔터칠 때마다 list 동적으로 생성