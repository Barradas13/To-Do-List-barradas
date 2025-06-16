const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function getTasks() {
  const tasksJSON = localStorage.getItem("tarefas");
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function saveTasks(tasks) {
  localStorage.setItem("tarefas", JSON.stringify(tasks));
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

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
});
