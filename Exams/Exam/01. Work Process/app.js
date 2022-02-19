function solve() {
    const fNameElement = document.getElementById('fname');
    const lNameElemenet = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthlElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');
    const hireButtonElement = document.getElementById('add-worker');
    const tableElement = document.getElementById('tbody');
    const budgetSumElement = document.getElementById('sum');

    hireButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        const rowElement = document.createElement('tr');
        const firtstNameRowElement = document.createElement('td');
        const lastNameRowElement = document.createElement('td');
        const emailRowElement = document.createElement('td');
        const birthDateRowElement = document.createElement('td');
        const positionRowElement = document.createElement('td');
        const salaryRowElement = document.createElement('td');
        const buttonsRowElement = document.createElement('td');
        const firedBtnElement = document.createElement('button');
        const editBtnElement = document.createElement('button');

        firtstNameRowElement.textContent = fNameElement.value;
        lastNameRowElement.textContent = lNameElemenet.value;
        emailRowElement.textContent = emailElement.value;
        birthDateRowElement.textContent = birthlElement.value;
        positionRowElement.textContent = positionElement.value;
        salaryRowElement.textContent = salaryElement.value;

        firedBtnElement.textContent = 'Fired';
        editBtnElement.textContent = 'Edit';

        firedBtnElement.classList = 'fired';
        editBtnElement.classList = 'edit';

        buttonsRowElement.appendChild(firedBtnElement);
        buttonsRowElement.appendChild(editBtnElement);

        rowElement.appendChild(firtstNameRowElement);
        rowElement.appendChild(lastNameRowElement);
        rowElement.appendChild(emailRowElement);
        rowElement.appendChild(birthDateRowElement);
        rowElement.appendChild(positionRowElement);
        rowElement.appendChild(salaryRowElement);
        rowElement.appendChild(buttonsRowElement);

        tableElement.appendChild(rowElement);

        let currentBudget = Number(budgetSumElement.textContent);

        budgetSumElement.textContent = (currentBudget + Number(salaryRowElement.textContent)).toFixed(2);


        fNameElement.value = '';
        lNameElemenet.value = '';
        emailElement.value = '';
        birthlElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        editBtnElement.addEventListener('click', (e) => {
            const infoToEdit = Array.from(e.target.parentElement.parentElement.childNodes);
    
            fNameElement.value = infoToEdit[0].textContent;
            lNameElemenet.value = infoToEdit[1].textContent;
            emailElement.value = infoToEdit[2].textContent;
            birthlElement.value = infoToEdit[3].textContent;
            positionElement.value = infoToEdit[4].textContent;
            salaryElement.value = infoToEdit[5].textContent;
    
            let currentBudget = Number(budgetSumElement.textContent);
            let sum = currentBudget - Number(salaryElement.value);
            budgetSumElement.textContent = sum.toFixed(2);
            

            e.target.parentElement.parentElement.remove();
        });

        firedBtnElement.addEventListener('click', (e)=>{
            const infoToEdit = Array.from(e.target.parentElement.parentElement.childNodes);
            let currentBudget = Number(budgetSumElement.textContent);
            let sum = currentBudget - Number(infoToEdit[5].textContent)
            
            budgetSumElement.textContent = sum.toFixed(2);
            e.target.parentElement.parentElement.remove();
        });
    });
}