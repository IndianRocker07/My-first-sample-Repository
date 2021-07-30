function addTask() {
  const tasks = document.getElementById("input").value;
  const taskCon = document.getElementById("task-list");
  let a = taskCon.innerHTML;
  taskCon.innerHTML = a + "<div class='task'>" + tasks + "</div>";
}
