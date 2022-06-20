document.querySelector(`#push`).onclick=function(){
    if(document.querySelector(`#newtask input`).value.length==0){
        alert("please Enter a task")
    }
    else{
        document.querySelector(`#task`).innerHTML += `
        <li class="task">
            <span id="taskname">
                ${document.querySelector(`#newtask input`).value}
            </span>
            <button id="delete"> X </button>
        </li>`;
        var current_task =document.querySelectorAll(`#delete`);
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
}