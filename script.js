let taskArray = [];

const handleSubmitTask = (event) => {
  event.preventDefault();
  const taskTitle = document.getElementById("title").value;
  const taskDescription = document.getElementById("description").value;
  const taskList = document.getElementById("lists");
  const noTasksMessage = document.getElementById("noTasksMessage");

  if (taskTitle && taskDescription) {
    noTasksMessage.style.display = "none";
    const li = document.createElement("li");
    li.textContent = taskTitle;
    li.classList.add("task-item");
    li.addEventListener("click", () => showModal(taskTitle, taskDescription));
    taskArray.push({ taskTitle, taskDescription });
    taskList.appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
};

const showModal = (title, description) => {
  const modal = document.getElementById("taskModal");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;
  modal.style.display = "block";
};
const closeModal = () => {
  const modal = document.getElementById("taskModal");
  modal.style.display = "none";
};

const checkForNoTasks = () => {
  const noTasksMessage = document.getElementById("noTasksMessage");
  if (taskArray.length === 0) {
    noTasksMessage.style.display = "block";
  }
};
checkForNoTasks();
