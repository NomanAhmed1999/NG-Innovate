// const parent = document.getElementById("parent")
// const child = document.getElementById("child")
// console.log(parent.children);
// console.log(child.previousElementSibling);
// console.log(child.nextElementSibling);



// Start Todo App code ---------------


const input = document.getElementById("input");
const addTodoBtn = document.getElementById("addTodo");
const deleteAllTodoBtn = document.getElementById("deleteAllTodo");
const list_items = document.getElementById("list_items");

// console.log(input);
// console.log(addTodoBtn);
// console.log(deleteAllTodoBtn);

addTodoBtn.addEventListener("click", function () {
    let value = input.value

    if (value.trim() === "") {
        return alert("Bhai Kch value tu daalo todo me")
    }
    list_items.innerHTML += `<li>
                <span>${value}</span>
                <button onclick="delTodo(this)">Delete</button>
                <button onclick="updateTodo(this)">Update</button>
            </li>`

    // Clear the input box
    input.value = ""

})

deleteAllTodoBtn.addEventListener("click", function () {
    list_items.innerHTML = ""
})


function delTodo(element) {
    // to delete this element
    // console.log(element.parentElement)
    element.parentElement.remove()
}
function updateTodo(element) {
    // console.log("update=> ", element.parentElement.firstElementChild)
    // console.log("update=> ", element.previousElementSibling.previousElementSibling)

    let todoItem = element.parentElement.firstElementChild;
    let updatedTodo = prompt("Enter Todo to update:", todoItem.innerText);
    todoItem.innerText = updatedTodo
}

