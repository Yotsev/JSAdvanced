function solve() {
  let inputElemet = document.getElementById('input');
  let sentances = inputElemet.value.split('.').filter(s => s !== '');

  let outputElement = document.getElementById('output')
  while (sentances.length > 0) {
    let text = sentances.splice(0, 3).join('. ')+'.';
    let paragraf = document.createElement('p');
    paragraf.textContent = text;
    outputElement.appendChild(paragraf);
  }
}