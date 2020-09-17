document.addEventListener('DOMContentLoaded', function() {
  /*---DOM refs---*/
  let addBtn = document.getElementById('addBtn')
  let formDiv = document.getElementById('formDiv')
  let taskName = document.getElementById('taskName')
  let taskDate = document.getElementById('taskDate')
  let todoUl = document.getElementById("todoList")

  /*---FUNCTIONS---*/

  let showForm = () => {    
    if (formDiv.style.display === "initial" || "") {
      formDiv.style.display = "none"
    } else {formDiv.style.display = "initial"}
 }

  addBtn.addEventListener('click', showForm)

  let addTask = (e) => {
    e.preventDefault();
    let nameValue = taskName.value
    let dateValue = taskDate.value
    let taskLi = document.createElement("li")

    nameNode = document.createTextNode(nameValue)
    dateNode = document.createTextNode(dateValue)
    checkEl = document.createElement('i')
    deleteEl = document.createElement('i')
    
    taskLi.classList.add('card', "liItems");
    checkEl.classList.add('far', 'fa-check-circle')
    deleteEl.classList.add('fa', 'fa-times')
    
    taskLi.appendChild(checkEl)
    taskLi.appendChild(nameNode)
    taskLi.appendChild(dateNode)
    taskLi.appendChild(deleteEl)
    todoUl.appendChild(taskLi)
  }

  document.getElementById("submitBtn").addEventListener("click", addTask)
})