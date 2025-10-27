// ======================
// CLASS TUGAS
// ======================
class Task {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

// ======================
// CLASS MANAJER TUGAS
// ======================
class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask = (text) => {
    const id = Date.now();
    const newTask = new Task(id, text);
    this.tasks.push(newTask);
    this.saveToLocalStorage();
  }

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveToLocalStorage();
  }

  editTask = (id, newText) => {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.text = newText;
    this.saveToLocalStorage();
  }
}

// ======================
// INISIALISASI
// ======================
const taskManager = new TaskManager();
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

// ======================
// RENDER LIST (Template Literal)
// ======================
const renderTasks = () => {
  taskList.innerHTML = taskManager.tasks.map(task => `
    <li>
      <span>${task.text}</span>
      <div class="actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Hapus</button>
      </div>
    </li>
  `).join('');
};

// ======================
// EVENT HANDLER
// ======================
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) return;
  taskManager.addTask(text);
  taskInput.value = '';
  renderTasks();
});

// ======================
// ASYNC/AWAIT UNTUK EDIT & HAPUS
// ======================
window.deleteTask = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 200)); // simulasi proses async
  taskManager.deleteTask(id);
  renderTasks();
};

window.editTask = async (id) => {
  const newText = prompt("Edit tugas:");
  if (newText && newText.trim() !== "") {
    await new Promise(resolve => setTimeout(resolve, 200));
    taskManager.editTask(id, newText.trim());
    renderTasks();
  }
};

// ======================
// RENDER SAAT LOAD
// ======================
renderTasks();
