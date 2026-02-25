function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
    input.focus();
}

// Allow adding task by pressing Enter
document.getElementById('taskInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});