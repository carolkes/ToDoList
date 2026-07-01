window.onload = function() {
    var btnCriar = document.getElementById("button-addon2");

    btnCriar.addEventListener("click", addTask)
}


function addTask() {

    var inputElement = document.getElementById("input-task");
    var taskTitle = inputElement.value;

    if(taskTitle == ""){
        window.alert("Este Campo Não Pode Estar Vazio");
    } else {
        var taskList = document.getElementById("task-list"); // pegar a lista de UL
        var newItem= document.createElement("li"); // criar novo elemento LI
        newItem.classList.add("list-group-item");// setar classe do LI com a classe que ja temos hoje

        // adicionar titulo dentro do LI
        newItem.textContent = taskTitle;
        
        
        // fazer append child no UL com o LI criado
        taskList.appendChild(newItem);
    }
}