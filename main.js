document.addEventListener('DOMContentLoaded', function() {
  /*---DOM refs---*/
  let addBtn = document.getElementById('addBtn')
  let formDiv = document.getElementById('formDiv')
  let taskName = document.getElementById('taskName')
  let taskDate = document.getElementById('taskDate')
  let todoUl = document.getElementById("todoList")
  let checkIds = []

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

    // creation of new elements

    let taskLi = document.createElement("li")
    let nameDiv = document.createElement('div')
    let nameNode = document.createTextNode(nameValue)
    let dateDiv = document.createElement('div')
    let dateNode = document.createTextNode(dateValue)
    let checkDiv = document.createElement('div')
    let checkEl = document.createElement('i')
    let deleteEl = document.createElement('i')

    // adding in classes for each element for styling and targeting
    
    taskLi.classList.add('card', "liItems");
    nameDiv.classList.add('nameDiv')
    dateDiv.classList.add('dateDiv')
    checkDiv.classList.add('checkDiv')
    checkEl.classList.add('far', 'fa-check-circle')
    deleteEl.classList.add('fa', 'fa-times')

    // Event listeners for marking complete and deleting items

    checkDiv.addEventListener("click", (e) => {
      if (checkDiv.style.color === "rgb(158, 158, 158)" || !checkDiv.style.color) {
        checkDiv.style.color = "green"
      } else {checkDiv.style.color = "rgb(158, 158, 158)"}
    })

    deleteEl.addEventListener("click", function(e) {
      this.parentNode.parentNode.removeChild(this.parentNode) 
    });

    // appending elements in order from divs -> li -> ul
    
    nameDiv.appendChild(nameNode)
    dateDiv.appendChild(dateNode)
    checkDiv.appendChild(checkEl)
    taskLi.appendChild(checkDiv)
    taskLi.appendChild(nameDiv)
    taskLi.appendChild(dateDiv)
    taskLi.appendChild(deleteEl)
    todoUl.appendChild(taskLi)

    // Adding ID to new checkmark divs and pushing to new array
    // after appending so new items get id'd and pushed

    let element = document.querySelectorAll('.checkDiv')
    
    Array.from(element).forEach(function(ele, i) {
        ele.setAttribute("id", 'item' + (i))
        checkIds.push(ele)
        
      })

  }

  document.getElementById("submitBtn").addEventListener("click", addTask)

 
  


  

  

  

 
  




})