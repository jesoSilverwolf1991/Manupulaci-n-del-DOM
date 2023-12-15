
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Completar</button>
            <button onclick="deleteTask(this)">Eliminar</button>
        `;
        taskList.appendChild(li);

        newTaskInput.value = ''; 
    }
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
