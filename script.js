// Select DOM elements
const taskInput = document.getElementById("taskInput");
const taskCategoryInput = document.getElementById("taskCategoryInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

// Initialize task counts
let taskCount = 0;
let completedTaskCount = 0;

// Add event listener to the "Add Task" button
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskCategory = taskCategoryInput.value;

  // Validate input
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task element
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <span class="task-text">${taskText} (${taskCategory})</span>
    <div>
      <button class="complete-task">Complete</button>
      <button class="delete-task">Delete</button>
    </div>
  `;

  // Add complete functionality to the task
  taskItem.querySelector(".complete-task").addEventListener("click", () => {
    const taskTextElement = taskItem.querySelector(".task-text");
    taskTextElement.classList.toggle("completed");

    // Update completed task count
    if (taskTextElement.classList.contains("completed")) {
      completedTaskCount++;
    } else {
      completedTaskCount--;
    }
    updateTaskCount();
  });

  // Add delete functionality to the task
  taskItem.querySelector(".delete-task").addEventListener("click", () => {
    const taskTextElement = taskItem.querySelector(".task-text");

    // Adjust completed task count if the task is completed
    if (taskTextElement.classList.contains("completed")) {
      completedTaskCount--;
    }

    taskItem.remove();
    taskCount--;
    updateTaskCount();
  });

  // Append the task to the task list
  taskList.appendChild(taskItem);

  // Clear the input fields
  taskInput.value = "";
  taskCategoryInput.value = "work";

  // Update the task count
  taskCount++;
  updateTaskCount();
});

// Function to update the task count
function updateTaskCount() {
  totalTasks.textContent = taskCount;
  completedTasks.textContent = completedTaskCount;
}
