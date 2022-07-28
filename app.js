//Selecting elements
const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");
const todoList = document.querySelector(".todo-list");

//added event listeners
addBtn.addEventListener("click", addToDo);

//functions
function addToDo(e) {
  //prevent page from refreshing when adding new tasks
  e.preventDefault();

  //if there is no input, button + is not clickable
  if (!inputText.value) {
    return false;
  }

  //create a new div element which will store <li> and 2 <button>
  const newDiv = document.createElement("div");
  newDiv.classList.add("new-div-container");

  //create a new <li> element and add a class to it, append to parent newDiv element
  const newLi = document.createElement("li");
  newLi.innerText = inputText.value;
  newLi.classList.add("todo-item");
  newDiv.appendChild(newLi);

  //create a new complete <button> element and add a class to it, append to parent newDiv element. Use <i> to add icon
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  newDiv.appendChild(completedBtn);

  //create a new remove <button> element and add a class to it, append to parent newDiv element. Use <i> to add icon
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  removeBtn.classList.add("remove-btn");
  newDiv.appendChild(removeBtn);

  //append newDiv element to the ul (that has a class list of todoList)
  todoList.appendChild(newDiv);

  //empty input after adding a task
  inputText.value = "";

  //completing a task
  completedBtn.addEventListener("click", function (e) {
    newDiv.classList.toggle("completed-task");
  });

  //removing a task
  removeBtn.addEventListener("click", function () {
    newDiv.remove();
  });
}
