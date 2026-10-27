function addTask(){
const taskInput=document.getElementById("taskInput");
const dateInput=document.getElementById("dateInput");
const timeInput=document.getElementById("timeInput");
const taskList=document.getElementById("taskList");
const taskText=taskInput.value.trim(), selectedDate=dateInput.value, selectedTime=timeInput.value;
if(!taskText||!selectedDate||!selectedTime){alert("Please enter a task, date, and time.");return;}
const date=new Date(selectedDate+"T00:00:00");
const day=date.getDate(), month=date.toLocaleString("en-US",{month:"long"}), year=date.getFullYear();
let [hour,minute]=selectedTime.split(":"); hour=parseInt(hour,10);
const ampm=hour>=12?"PM":"AM"; hour=hour%12||12;
const formattedTime=`${hour}:${minute} ${ampm}`;
const task=document.createElement("div"); task.className="task";
task.innerHTML=`<div class="task-info"><div class="task-name">${escapeHtml(taskText)}</div><div class="task-date">📅 ${day} ${month} ${year} &nbsp; ⏰ ${formattedTime}</div></div><button class="complete-btn" onclick="completeTask(this)">Complete</button><button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
taskList.appendChild(task); taskInput.value=""; dateInput.value=""; timeInput.value="";
}
function completeTask(button){const task=button.parentElement;task.classList.toggle("completed");button.textContent=task.classList.contains("completed")?"Completed":"Complete";}
function deleteTask(button){button.parentElement.remove();}
function escapeHtml(text){const div=document.createElement("div");div.textContent=text;return div.innerHTML;}