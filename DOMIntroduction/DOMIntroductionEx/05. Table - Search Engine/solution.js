function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let inputElement = document.getElementById('searchField');
   console.log(inputElement);
   let tableElements = document.querySelectorAll('tbody tr')

   function onClick() {

      for (const row of tableElements) {
         row.classList.remove('select');

         if (inputElement.value !== '' && row.textContent.includes(inputElement.value)) {
            row.className = 'select';
         }
      }

      inputElement.value = '';
   }
}