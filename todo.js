const toDoForm = document.querySelector(".js-toDoForm");

console.log(toDoForm.style);

const toDoinput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  span.id = "s";

  li.appendChild(span);

  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);

  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoinput.value;
  paintToDo(currentValue);
  toDoinput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
