// Global Variables
const listContainer = document.getElementById('todo-list');
const todoForm = document.newTodoForm

// Functions
function getApi(){
    axios.get("https://api.vschool.io/ze_arcanist95/todo")
        .then(res => displayData(res.data))
        .catch(err => console.log(err));
}
function clearList(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
}
function displayData(data){
    clearList();
    
    for(let i = 0; i < data.length; i++){
        const itemContainer = document.createElement('li');
        const itemTitle = document.createElement('h3');
        const itemDesc = document.createElement('p');
        const itemImg = document.createElement('img');
        const checkBox = document.createElement('input');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const docFragment = document.createDocumentFragment()

        itemContainer.classList.add('list-item');
        itemTitle.textContent = data[i].title;
        itemTitle.classList.add('item-title');
        itemDesc.textContent = data[i].description;
        itemDesc.classList.add('item-desc');
        itemImg.src = data[i].imgUrl;
        itemImg.classList.add('item-img');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('checkbox');
        editBtn.innerText = 'Edit';
        editBtn.setAttribute('onclick', 'editTodo()');
        editBtn.classList.add('edit-button');
        delBtn.innerText = 'Delete';
        delBtn.setAttribute('onclick', 'deleteTodo()');
        delBtn.classList.add('delete-button');


        if (itemImg.src === "") {
            itemImg.style.display = "none";
        }

        docFragment.appendChild(itemContainer);
        itemContainer.append(itemTitle, itemDesc, itemImg,checkBox, editBtn, delBtn);
        listContainer.appendChild(itemContainer);
    }
}

// Event Handlers
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.imgUrl.value = "";
    
    axios.post("https://api.vschool.io/ze_arcanist95/todo", newTodo)
        .then(res => getApi())
        .catch(err => console.log(err));
})
function editTodo(object) {

} 
function deleteTodo(object) {
    axios.delete("https://api.vschool.io/ze_arcanist95/todo/" + object._id)
        .then(res => getApi())
        .catch(err => console.log(err));
}
getApi();