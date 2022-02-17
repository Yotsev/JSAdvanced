window.addEventListener('load', solution);

function solution() {
    const submitBtnElement = document.getElementById('submitBTN');
    const edintBtnElement = document.getElementById('editBTN');
    const continueBtnElement = document.getElementById('continueBTN');
    const blockElement = document.getElementById('block');
    const previewElement = document.getElementById('infoPreview');


    const inputsElements = Array.from(document.getElementById('form').querySelectorAll('input'));
    const labelElements = Array.from(document.getElementById('form').querySelectorAll('label'));


    submitBtnElement.addEventListener('click', (e) => {

        if (inputsElements[0].value && inputsElements[1].value) {

            for (let i = 0; i < inputsElements.length - 1; i++) {
                const liElement = document.createElement('li');
                liElement.textContent = `${labelElements[i].textContent} ${inputsElements[i].value}`;
                previewElement.appendChild(liElement);

                inputsElements[i].value = '';
            }
            submitBtnElement.disabled = true;
            edintBtnElement.disabled = false;
            continueBtnElement.disabled = false;
        }
    });

    edintBtnElement.addEventListener('click', (e) => {
        const listItems = Array.from(previewElement.childNodes);

        for (let i = 0; i < inputsElements.length - 1; i++) {
            inputsElements[i].value = listItems[i].textContent.split(': ')[1];
            listItems[i].remove();
        }

        submitBtnElement.disabled = false;
        edintBtnElement.disabled = true;
        continueBtnElement.disabled = true;
    });

    continueBtnElement.addEventListener('click', (e) => {
        blockElement.innerHTML = '';
        const h3Element = document.createElement('h3');
        h3Element.textContent = 'Thank you for your reservation!';

        blockElement.appendChild(h3Element);
    });
}
