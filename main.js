const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const totalTasksEL = document.querySelector('#totalTasks');
const completedTasksEL = document.querySelector('#completedTasks');
const remainingTasksEL = document.querySelector('#remainingTasks');

let tasks = [];

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();        
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-state">No tasks yet. Add one above!</li>';
        updateStats();
        return;
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function(){
            toggleTask(task.id);
        });

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function(){
            deleteTask(task.id);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateStats();
}

function toggleTask(id) {
    const t = tasks.find(task => task.id === id);
    if (t) {
        t.completed = !t.completed;
        renderTasks();
        updateStats();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    totalTasksEL.textContent = total;
    completedTasksEL.textContent = completed;
    remainingTasksEL.textContent = remaining;
}







