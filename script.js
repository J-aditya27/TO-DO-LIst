document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask(event) {
        event.preventDefault();
        const taskText = taskInput.value;

        const li = document.createElement('li');
        li.textContent = taskText;
        li.appendChild(createCompleteButton());
        li.appendChild(createDeleteButton());

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function createCompleteButton() {
        const button = document.createElement('button');
        button.textContent = 'Complete';
        button.className = 'complete';
        return button;
    }

    function createDeleteButton() {
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.className = 'delete';
        return button;
    }

    function handleTaskActions(event) {
        const target = event.target;
        if (target.classList.contains('complete')) {
            const li = target.parentElement;
            li.classList.toggle('completed');
        } else if (target.classList.contains('delete')) {
            const li = target.parentElement;
            taskList.removeChild(li);
        }
    }
});
