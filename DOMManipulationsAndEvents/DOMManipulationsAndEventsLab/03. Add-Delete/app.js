function addItem() {
    let inputElement = document.getElementById('newItemText');

    let newElemnt = document.createElement('li')
    newElemnt.textContent = inputElement.value;

    let remove = document.createElement('a');
    let link = document.createTextNode('[Delete]');
    remove.appendChild(link);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    let unorderedListElement = document.getElementById('items');

    newElemnt.appendChild(remove);
    unorderedListElement.appendChild(newElemnt);

    function deleteItem(){
        newElemnt.remove();
    }
}