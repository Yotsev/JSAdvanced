function toggle() {
    let buttoneElement = document.getElementsByClassName('button')[0];
    let moreElement = document.getElementById('extra');
    
    if (buttoneElement.textContent === 'More') {
        moreElement.style.display = 'block';
        buttoneElement.textContent = 'Less';
    }else if (buttoneElement.textContent === 'Less') {
        moreElement.style.display = 'none';
        buttoneElement.textContent = 'More';
    }
}