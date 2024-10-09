const handleSubmitTask = (event) => {
  event.preventDefault();
  const taskTitle = document.getElementById("title").value;
  const taskDescription = document.getElementById("description").value;
  const taskList = document.getElementById("lists");

  const li = document.createElement("li");
  li.textContent = taskTitle;

  taskList.appendChild(li);
};
