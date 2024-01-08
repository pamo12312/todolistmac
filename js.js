function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("div");
    newTask.className = "task";
    let taskText = document.createElement("input");
    taskText.type = "text";
    taskText.value = taskInput.value;
    taskText.disabled = true;
    newTask.appendChild(taskText);



    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove";
    removeButton.onclick = function () {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
}