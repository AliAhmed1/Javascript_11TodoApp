var task = document.getElementById("task");

firebase.database().ref('Activity/').on('child_added', function (data) {

    // data.forEach(function (childData) {
    var getValueFromDatabase = data.val().taskname;
    var setKeyfromDatabase = data.key;
    var addingLi = document.createElement("li")
    addingLi.style.backgroundColor = "yellow"
    // addingLi.style.border = "20px"
    addingLi.style.fontWeight = "bold"
    // console.log(data.key)

    var addingText = document.createTextNode(getValueFromDatabase);
    addingLi.appendChild(addingText)
    task.appendChild(addingLi);


    var addingBtn = document.createElement("button")
    var addingBtnText = document.createTextNode("Delete");
    addingBtn.appendChild(addingBtnText)
    addingBtn.setAttribute("onclick", "deleteTodo(this)")
    addingBtn.setAttribute("class", "deleteTodo")
    addingLi.appendChild(addingBtn);

    var addingEdit = document.createElement("button")
    var addingEditText = document.createTextNode("Edit");
    addingEdit.appendChild(addingEditText)
    addingEdit.setAttribute("onclick", "editTodo(this)")
    addingEdit.setAttribute("class", "editTodo")
    addingLi.appendChild(addingEdit);
    addingLi.setAttribute("id", setKeyfromDatabase);
    // })
})


function addTask() {

    var inputTodo = document.getElementById("todoValue");
    var key = firebase.database().ref().push().key;
    var Activity = {
        taskname: inputTodo.value,
    }
    var database = firebase.database().ref('Activity/' + key)
    database.set(Activity);
    inputTodo.value = ""
}

function deleteAllTask() {
    task.innerHTML = ""
    firebase.database().ref('Activity').remove();

}


function deleteTodo(e) {
    // console.log(e.parentNode)
    e.parentNode.remove();
    const key = e.parentNode.getAttribute("id");
    firebase.database().ref('Activity/' + key).remove()

}

function editTodo(e) {
    var editValue = prompt("Edit Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
    const key = e.parentNode.getAttribute("id");
    console.log(key)
    firebase.database().ref('Activity/' + key).set({
        taskname: editValue,
    });
}