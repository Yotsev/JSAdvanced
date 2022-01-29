function addItem() {
    let unorderedListElement = document.getElementById('items');
    
    let inputTextElement = document.getElementById('newItemText');
    
    let newListItem = document.createElement('li');
    newListItem.textContent = inputTextElement.value;

    unorderedListElement.appendChild(newListItem);

}