var task = document.getElementById("task");


function addTask()
{
    var inputTodo = document.getElementById("todoValue");
    var addingLi = document.createElement("li")
    addingLi.style.backgroundColor = "yellow"
    // addingLi.style.border = "20px"
    addingLi.style.fontWeight = "bold"
    var addingText = document.createTextNode(inputTodo.value);
    addingLi.appendChild(addingText)
    task.appendChild(addingLi);

    inputTodo.value=""


    var addingBtn = document.createElement("button")
    var addingBtnText = document.createTextNode("DELETE");
    addingBtn.appendChild(addingBtnText)
    addingBtn.setAttribute("onclick" , "deleteTodo(this)")
    addingBtn.setAttribute("class" , "deleteTodo")
    addingLi.appendChild(addingBtn);


    var addingEdit = document.createElement("button")
    var addingEditText = document.createTextNode("EDIT");
    addingEdit.appendChild(addingEditText)
    addingEdit.setAttribute("onclick" , "editTodo(this)")
    addingEdit.setAttribute("class" , "editTodo")
    addingLi.appendChild(addingEdit);



    console.log(addingLi);
}

function deleteAllTask()
{
    task.innerHTML=""
}


function deleteTodo(e)
{
    e.parentNode.remove();
}

function editTodo(e)
{
    var editValue = prompt("Edit Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
    console.log(e.parentNode.firstChild.nodeValue)
    
}