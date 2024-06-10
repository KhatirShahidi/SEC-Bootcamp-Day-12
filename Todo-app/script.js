// Form submission in JavaScript
// Append new child to the parent

const taskForm = document.querySelector("#taskForm");
const tasksList = document.querySelector("#tasksList");
const buttons = document.querySelector("#buttons");
const deleteBtn = ".delete";

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = event.target[0].value;
  console.log(task);
  // Create a new list item for the task
  const newList = document.createElement("li");
  newList.innerText = task;
  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete");
  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // Create div to contain checkbox and delete button
  const buttonDiv = document.createElement("div");
  buttonDiv.id = "buttons";
  buttonDiv.appendChild(checkbox);
  buttonDiv.appendChild(deleteButton);
  // Add the div to the list item
  newList.appendChild(buttonDiv);
  // Add the list item to the task list
  tasksList.appendChild(newList);
  taskForm.reset();
});

// Event listener for delete button
tasksList.addEventListener("click", function (event) {
  if (event.target.matches(deleteBtn)) {
    const listItem = event.target.closest("li");
    listItem.remove();
  }
});
// Event listener for checkbox
tasksList.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const listItem = event.target.parentElement.parentElement; // Get the parent list item
    if (event.target.checked) {
      // If checkbox is checked, apply line-through style to the task text
      listItem.style.textDecoration = "line-through";
    } else {
      // If checkbox is unchecked, remove line-through style
      listItem.style.textDecoration = "none";
    }
  }
});

// Todo App - Assesment
// 1. Add a delete button to each task
// 2. When the delete button is clicked, the task should be removed from the list
// 3. Add a checkbox to each task
// 4. When the checkbox is checked, the text should have a line-through
// 5. When the checkbox is unchecked, the line-through should be removed
