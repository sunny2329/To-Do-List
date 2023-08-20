const inputbox = document.getElementById('input-box');


const lists = document.getElementById('list');



function addtask() {
    if (inputbox.value === '') alert('You must enter a task!');
    else {
        let li = document.createElement('li');
        li.classList.add('lis');
        let di = document.createElement('div');
        li.classList.add('relative');
        di.classList.add('divs');

        li.innerHTML = inputbox.value;
        li.appendChild(di);
        lists.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        span.classList.add('cross');
        li.appendChild(span);

    }

    inputbox.value = "";
    save();
}


lists.addEventListener('click', function (e) {
    if(e.target.tagName === 'DIV'){
        e.target.parentElement.classList.toggle('check');
        e.target.classList.toggle('divscheck');
        save();
        }
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('check');
        e.target.children[0].classList.toggle('divscheck');
        save();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
    }
}, false);


function save(){
    localStorage.setItem("data",lists.innerHTML)
}

function show(){
    lists.innerHTML = localStorage.getItem("data");
}

show();