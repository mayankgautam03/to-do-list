let tasknumber = document.querySelector(".tasknumber"); 
let inputField = document.getElementById("inputField");

function addTask() { 
    if (inputField.value === '') {
        alert("You must write something!");
    } else {
        let task = document.createElement("li");
        task.innerHTML = inputField.value;
        tasknumber.appendChild(task); 

        
    }
    inputField.value = ""; 
    saveData()
}

tasknumber.addEventListener("click", (el) => {
    if (el.target.tagName === "LI") {
        el.target.classList.toggle("checked");
        saveData()
    }   
}); 

function saveData() {
    let tasks = tasknumber.innerHTML;
    localStorage.setItem('tasks', tasks);
} 
function showData() {
    let tasks = localStorage.getItem('tasks');
}

showData()