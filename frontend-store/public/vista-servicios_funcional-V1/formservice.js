//getting all required alements 
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".allList", ".mostrador .allList");
const mostradorList = document.querySelector(".mostrador .allList");
const deleteAllBtn = document.querySelector(".footer .deleteAll");

inputBox.onkeyup = () =>{
    let serviceData = inputBox.value; //getting service entered value
    if(serviceData.trim() != 0){ //if service value aren´t only spaces
        addBtn.classList.add("active"); //active the add button
    }else{
        addBtn.classList.remove("active"); //unactive the add button
    }
}

//if user click on the add button
addBtn.onclick = ()=>{
    let serviceData = inputBox.value; //getting service entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage);//transforming json string into a js object
    }
    listArr.push(serviceData);//pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTasks();// calling showTasks function 
    addBtn.classList.remove("active"); //unactive the add button
}

//function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage);//transforming json string into a js object
    }

    if(listArr.length > 0){// if array length is greater than 0
        deleteAllBtn.classList.add("active");//active the clearall button
    }else{
        deleteAllBtn.classList.remove("active");//unactive the clearall button
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag; //adding new lo tag inside ul tag
    mostradorList.innerHTML = newLiTag;
    inputBox.value = ""; //once task added leave the input fielt blank
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTasks();
}

//delete all tasks function
deleteAllBtn.onclick = ()=>{
    listArr = []; //empty an array
    //after delete all task again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTasks();
}