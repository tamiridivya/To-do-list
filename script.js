
// Get references to DOM elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a task
function addTask() {
  const taskText = taskInput.value;
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Create the complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = function() {
    li.classList.toggle('completed');
  };
  
  // Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };
  
  // Add buttons to the list item
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  
  // Append the new task to the task list
  taskList.appendChild(li);
  
  // Clear the input field
  taskInput.value = '';
}
