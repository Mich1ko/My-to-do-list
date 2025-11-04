const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const totalTasksEL = document.querySelector('#totalTasks');
const completedTasksEL = document.querySelector('completedTasks')
const remainingTasksEL = document.querySelector('#remainingTasks');

let tasks = [];

addBtn.addEventListener('click', addTask);

console.log('I clicked the button');

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();        
}
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') 
    alert('Please enter a task.');
    return;
}

const task = {
    id: Date.now(),
    text: taskText,
    completed: false
};
console.log('I added a task', task)


