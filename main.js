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
    checkDiv = document.createElement('div')
    checkEl = document.createElement('i')
    deleteEl = document.createElement('i')
    
    taskLi.classList.add('card', "liItems");
    checkEl.classList.add('far', 'fa-check-circle')
    deleteEl.classList.add('fa', 'fa-times')
    checkDiv.classList.add('checkDiv')

    checkDiv.addEventListener('click', completeTask)
    
    checkDiv.appendChild(checkEl)
    taskLi.appendChild(checkDiv)
    taskLi.appendChild(nameNode)
    taskLi.appendChild(dateNode)
    taskLi.appendChild(deleteEl)
    todoUl.appendChild(taskLi)

    
  }

  document.getElementById("submitBtn").addEventListener("click", addTask)

  let checkCircle = document.getElementsByClassName('fa-check-circle')


  let completeTask = () => {
    console.log(checkCircle)
    if (checkDiv.children.style.color === "rgb(158, 158, 158)" || "") {
      checkDiv.children.style.color = "green"
    } else {checkDiv.children.style.color = "rgb(158, 158, 158)"}
  }
  
  // checkCircle.addEventListener('click', completeTask)

  // checkCircleDiv = document.querySelectorAll('.checkDiv')
  
  // document.addEventListener('click', function(e) {
  //   if(/checkDiv/.test(e.target.className)) {
  //     console.log('clicked')
  //   }
  // }, false);  

  // .forEach(item => {
  //   item.addEventListener('click', event => {
  //     console.log('clicked')
  //     if (checkCircle.style.color === "rgb(158, 158, 158)" || "") {
  //       checkCircle.style.color = "green"
  //     } else {checkCircle.style.color = "rgb(158, 158, 158)"}
  //   })
  // })





})