function deleteByEmail() {

    let inputElement = document.getElementsByName('email')[0];
    let emailElements = document.querySelectorAll('#customers tr td:nth-child(2)')

    let resultElement = document.getElementById('result');

    for (const element of emailElements) {
        if (element.textContent === inputElement.value) {
            let row = element.parentNode;
            row.parentNode.removeChild(row);
            resultElement.textContent = 'Deleted.';
            return;
        }
    }

    resultElement.textContent = 'Not found.';

}