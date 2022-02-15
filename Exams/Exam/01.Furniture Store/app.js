window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const tabeleElement = document.getElementById('furniture-list');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (!modelInputElement.value || !descriptionInputElement.value) {
            return;
        }

        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value)

        if (year <= 0 || price <= 0) {
            return;
        }


        let modelElement = document.createElement('td');
        modelElement.textContent = modelInputElement.value;

        let priceElement = document.createElement('td');
        priceElement.textContent = price.toFixed(2);

        let rowElement = document.createElement('tr');
        rowElement.appendChild(modelElement);
        rowElement.appendChild(priceElement);

        rowElement.classList.add('info');

        tabeleElement.appendChild(rowElement);

        let infoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');

        infoButtonElement.classList.add('moreBtn');
        buyButtonElement.classList.add('buyBtn');

        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                moreInfoTableRow.style.display = 'contents';

                e.currentTarget.textContent = 'Less Info';

            } else {
                moreInfoTableRow.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        let actionsElement = document.createElement('td');

        infoButtonElement.textContent = 'More Info';
        buyButtonElement.textContent = 'Buy it';

        actionsElement.appendChild(infoButtonElement);
        actionsElement.appendChild(buyButtonElement);

        rowElement.appendChild(actionsElement);

        let moreInfoTableRow = document.createElement('tr');
        moreInfoTableRow.classList.add('hide');
        moreInfoTableRow.style.display = 'none';

        let moreInfoYearElement = document.createElement('td');
        let moreInfoDecriptionElement = document.createElement('td');
        moreInfoDecriptionElement.setAttribute('colspan', 3);

        moreInfoYearElement.textContent = `Year: ${yearInputElement.value}`;
        moreInfoDecriptionElement.textContent = `Description: ${descriptionInputElement.value}`;

        moreInfoTableRow.appendChild(moreInfoYearElement);
        moreInfoTableRow.appendChild(moreInfoDecriptionElement);

        tabeleElement.appendChild(moreInfoTableRow);


        buyButtonElement.addEventListener('click', (e) => {
            let totalPriceElement = document.querySelector('.total-price');
            let currentTotalPrice = Number(totalPriceElement.textContent)
            totalPriceElement.textContent = (currentTotalPrice + price).toFixed(2);
            rowElement.remove();
            moreInfoTableRow.remove();
        });

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceElement.value = '';
    });
}
