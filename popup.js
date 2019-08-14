var list = document.querySelectorAll('.todo__list li');
var todoInput = document.querySelector('.todo__input');
var todoForm = document.querySelector('.todo__form');

todoForm.addEventListener('submit', addTodo);


list.forEach(function(el){
    el.addEventListener('click', todoClicked);
})

function addTodo(e){
    e.preventDefault();
    var newTodo = todoInput.value;
    document.querySelector('.todo__list').insertAdjacentHTML('beforeend', `<li>${newTodo}</li>`)
}

function todoClicked(e){
   e.target.style.textDecoration = 'line-through';
}

function storeValue(){
    chrome.storage.local.set({todo: []}, function() {
        console.log('Value is set to ' + value);
      });
}
