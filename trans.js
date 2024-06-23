button = document.getElementById('button')
inputEl = document.getElementById('input');
todosUL = document.getElementById('todos');

function loadTodos() {
    todos = JSON.parse(localStorage.getItem('todos'));

    if (todos != undefined) {
        todos.forEach(todo => addTodo(todo.text, todo.isCompleted));
    }
}

button.addEventListener('click', function() {
    addTodo(inputEl.value, false)
});



function addTodo(todoText, isCompleted) {
    var todoEl = document.createElement('li');
    todoEl.innerText = todoText;

    if (isCompleted) {
        todoEl.classList.add('completed');
    }

    todoEl.addEventListener('click', function(e) {
        var clickedElement = e.target;
        clickedElement.classList.toggle('completed');
        updateLocalStorage();
    });

    todoEl.addEventListener('contextmenu', function(e) {
        e.preventDefault();

        var clickedElement = e.target;
        clickedElement.remove();
        updateLocalStorage();
    });

    todosUL.appendChild(todoEl);
    inputEl.value = '';
    updateLocalStorage();
}

function updateLocalStorage() {
    var todoEls = document.querySelectorAll('li');
    var todos = [];

    todoEls.forEach(function(todoEl) {
        var todo = {
            text: todoEl.innerText,
            isCompleted: todoEl.classList.contains('completed')
        };
        todos.push(todo);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

loadTodos();