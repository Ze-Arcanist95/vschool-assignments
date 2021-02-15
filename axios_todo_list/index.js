function getData(){
    axios.get("https://api.vschool.io/ze_arcanist95/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const itemContainer = document.createElement('div');
        const itemTitle = document.createElement('h3');
        const itemDesc = document.createElement('p');
        const itemImg = document.createElement('img');
        const editInput = document.createElement('input');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const docFragment = document.createDocumentFragment()

        itemTitle.textContent = data[i].title;
        itemTitle.classList.add('item-title');
        itemDesc.textContent = data[i].description;
        itemDesc.classList.add('item-desc');
        itemImg.src = data[i].imgUrl;
        itemImg.classList.add('item-img');
        itemContainer.classList.add('list-item');
        
        itemContainer.append(itemTitle, itemDesc, itemImg);
        document.getElementById('todo-list-container').append(itemContainer);
    }
}