// Seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

// Funções
const saveTodo = (text) => {

    // PRIMEIRA FORMA DE CRIAR HTML
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus();
}


// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    inputValue = todoInput.value

    if (inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }

    if (targetEl.classList.contains("edit-todo")) {
        editForm.classList.remove("hide")
        todoForm.classList.add("hide")
    }

    if (targetEl.classList.contains("cancel-edit-btn")) {
        console.log("Cancelar!")
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
        console.log("Excluiu!")
    }
})