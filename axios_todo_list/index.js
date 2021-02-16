const listContainer = document.getElementById('todo-list');

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
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-button');
        delBtn.innerText = 'Delete';
        delBtn.classList.add('delete-button');

        docFragment.appendChild(itemContainer);
        itemContainer.append(itemTitle, itemDesc, itemImg, editBtn, delBtn);
        listContainer.appendChild(itemContainer);
    }
}

getApi();