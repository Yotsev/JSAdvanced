function search() {
   
   let townElemnts = document.querySelectorAll('ul#towns li')

   for (const element of townElemnts) {
      element.style.textDecoration = 'none';
      element.style.fontWeight = 'normal';
   }
   let searchElement = document.getElementById('searchText').value;
      let counter = 0;
   for (const element of townElemnts) {
      if (element.textContent.includes(searchElement)) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         counter++;
      }
   }
   
   document.getElementById('result').textContent = `${counter} matches found`;
}
