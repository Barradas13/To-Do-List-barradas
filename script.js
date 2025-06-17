const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

var tarefas = []

function salvarTarefa() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
}


function carregaTarefas() {

  const tarefasString = localStorage.getItem('tarefas');

  const arr = JSON.parse(tarefasString) || [];

  for (let i = 0; i < arr.length; i++) {
    tarefas.push(arr[i]);
    addElementos(arr[i]);
  }

  salvarTarefa();
}


function addElementos(taskText) {
  const card = document.createElement("div");
  card.className = "columns is-mobile is-centered";
  card.id = "card";

  const cardContent = document.createElement("div");
  cardContent.className = "column is-9";

  cardContent.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button is-danger is-dark";
  deleteBtn.textContent = "Excluir";

  deleteBtn.addEventListener("click", () => {
    card.remove();
    const index = tarefas.indexOf(taskText);
    tarefas.splice(index, 1);
    salvarTarefa();
  });

  const btnColumn = document.createElement("div");
  btnColumn.className = "column is-3";
  btnColumn.appendChild(deleteBtn);

  card.appendChild(cardContent);
  card.appendChild(btnColumn);

  // Adicionar o cartão na lista de tarefas
  taskList.appendChild(card);

  // Limpar campo de entrada e focar novamente
  taskInput.value = "";
  taskInput.focus();


}


addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  tarefas.push(taskText);
  salvarTarefa();

  addElementos(taskText)

});


window.onload = carregaTarefas;