const form = document.addItem;
const list = document.querySelector("#list");
const input = form.newItem;    

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const listItem = document.createElement("li");
    const itemName = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const editInput = document.createElement("input");

    listItem.classList.add("list-item");
    itemName.textContent = input.value;
    itemName.classList.add("list-item-content");
    editBtn.textContent = "Edit";
    editBtn.classList.add("button", "list-item-content");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("button", "list-item-content");

    listItem.append(itemName, editBtn, deleteBtn);
    list.append(listItem);
    input.value = ""

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });

    editBtn.addEventListener("click", (e) => {
        if(e.target.textContent == "Edit"){
            editInput.value = itemName.textContent;
            editBtn.textContent = "Save";
        
            listItem.prepend(editInput);
        } else if(e.target.textContent == "Save") {
            itemName.textContent = editInput.value;
            editBtn.textContent = "Edit";
            editInput.remove;
        }
    })
});