// script.js
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskText = taskInput.value.trim();
    taskInput.value = '';

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete" onclick="markComplete(this)">Complete</button>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    pendingList.appendChild(li);
}

function markComplete(button) {
    const taskItem = button.parentElement;
    completedList.appendChild(taskItem);
    button.style.display = 'none'; // Hide the "Complete" button
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').textContent;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null) {
        taskItem.querySelector('span').textContent = newTaskText;
    }
}
