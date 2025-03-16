document.addEventListener("DOMContentLoaded", () => {
  // getting task and form element 
  const taskForm = document.getElementById('create-task-form');
  const tasklist = document.getElementById('tasks');

  // adding prioty levels
  const prioritySelect = document.createElement('select');
  prioritySelect.id = "task-priority"; 
  prioritySelect.innerHTML = `
  <option value = "high">High Priority</optio>
  <option value = "medium">Medium Priority</optio>
  <option value ="low">Low Priority</optio>
  `;
  taskForm.insertBefore(prioritySelect, taskForm.children[1]);

  // form submission handling
  taskForm.addEventListener("submit", (ev) =>{
    ev.preventDefault();// preventing default form submission
    
    // getting the input from the user
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = prioritySelect.value;
   // console.log(priority)

    if (taskDescription.trim() === "") return; // ignoring those empty task

    //task item creation

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span>${taskDescription}</span>
    <button class = "delete-btn">❌</button>
    <button class = "edit-btn">✏️</button>
    `;

    //priority colors
    console.log("Selected Priority:", priority);
       switch (priority) {
        case "high":
          taskItem.style.color = "red";
          console.log("Priority is HIGH - Task should be RED");
          break;
        case "medium":
          taskItem.style.color = "orange";
          break;
        case "low":
          taskItem.style.color = "green";
          break;
        default:
          taskItem.style.color = "black"; // Default color
      }
      //console.log(priority)
    //Append task to list 
    tasklist.appendChild(taskItem);

    //clear input field
    taskForm.reset();

    //delete functionality
    taskItem.querySelector(".delete-btn").addEventListener("click",() =>{
      taskItem.remove();
    });
    taskItem.querySelector(".edit-btn").addEventListener("click", () =>{
      const newTask = prompt("Edit your task:", taskDescription);
      if (newTask !== null){
        taskItem.querySelector("span").textContent = newTask;
      }
    });
  });
});
