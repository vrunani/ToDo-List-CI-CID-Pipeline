let tasks = [
  { id: 1, text: "Learn Docker", done: false },
  { id: 2, text: "Set up GitHub Actions", done: false },
  { id: 3, text: "Deploy to production", done: false }
];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  const summary = document.getElementById("summary");
  const emptyMsg = document.getElementById("emptyMsg");

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${task.id})">
      <span class="task-text">${task.text}</span>
      <button onclick="deleteTask(${task.id})">✕</button>
    `;

    taskList.appendChild(li);
  });

  const doneCount = tasks.filter(t => t.done).length;
  summary.textContent = `${doneCount} of ${tasks.length} done`;

  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value.trim()) return;

  tasks.push({
    id: Date.now(),
    text: input.value,
    done: false
  });

  input.value = "";
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

renderTasks();