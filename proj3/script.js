const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    const li = document.createElement("h1");
    li.textContent = task;

    
    li.addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
});


