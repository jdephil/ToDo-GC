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

    let dateCompare = () => {
      var inpDate = new Date(dateValue); 
            var currDate = new Date(); 
              
            if(inpDate.setHours(0, 0, 0, 0) ==  
                    currDate.setHours(0, 0, 0, 0)) 
            { 
                dateNode = document.createTextNode("Today") 
            }  
            else { 
              dateNode = document.createTextNode(dateValue) 
            }          
    }

    dateCompare()

    taskLi = document.createElement("li")
    nameDiv = document.createElement('div')
    nameNode = document.createTextNode(nameValue)
    dateDiv = document.createElement('div')
    dateNode = document.createTextNode(dateValue)
    checkDiv = document.createElement('div')
    checkEl = document.createElement('i')
    deleteEl = document.createElement('i')
    upDiv = document.createElement('div')
    upEl = document.createElement('i')
    
    taskLi.classList.add('card', "liItems");
    nameDiv.classList.add('nameDiv')
    dateDiv.classList.add('dateDiv')
    checkDiv.classList.add('checkDiv')
    checkEl.classList.add('far', 'fa-check-circle')
    deleteEl.classList.add('fa', 'fa-times')
    upDiv.classList.add('upDiv')
    upEl.classList.add('fas', 'fa-long-arrow-alt-up')
    

    
    let element = document.querySelectorAll('.checkDiv')
    
    Array.from(element).forEach(function(ele, i) {
        ele.setAttribute("id", 'item' + (i + 1))
        checkIds.push(ele)
        
      })

    checkDiv.addEventListener("click", (e) => {
      for (var i = 0; i < checkIds.length; i++) {
        if (checkIds[i].style.color === "rgb(158, 158, 158)" || "") {
          checkIds[i].style.color = "green"
        } else {checkIds[i].style.color = "rgb(158, 158, 158)"}
      }
    })


    deleteEl.addEventListener("click", function(e) {
      this.parentNode.parentNode.removeChild(this.parentNode) 
    });

    upDiv.addEventListener("click", function(e) {
      this.parentNode.parentNode.removeChild(this.parentNode)
      let this.parentNode.parentNode.insertBefore(this.parentNode, this.parentNode.previousSibling)
    })
    
    
    nameDiv.appendChild(nameNode)
    dateDiv.appendChild(dateNode)
    checkDiv.appendChild(checkEl)
    upDiv.appendChild(upEl)
    taskLi.appendChild(checkDiv)
    taskLi.appendChild(nameDiv)
    taskLi.appendChild(dateDiv)
    taskLi.appendChild(deleteEl)
    taskLi.appendChild(upDiv)
    todoUl.appendChild(taskLi)

  }

  document.getElementById("submitBtn").addEventListener("click", addTask)

 
  


  

  

  

 
  




})