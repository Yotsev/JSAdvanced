function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      document.getElementById('searchField').textContent = '';
      const keyWord = document.getElementById('searchField').value;
      console.log(keyWord);
   }
}